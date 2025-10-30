// Vercel serverless function for Anthropic API proxy with streaming
export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle preflight request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: { message: 'Method not allowed' } });
    }

    try {
        const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

        if (!ANTHROPIC_API_KEY) {
            return res.status(500).json({ error: { message: 'API key not configured' } });
        }

        // Set up SSE headers for streaming
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');

        // Call Anthropic API with streaming and prompt caching enabled
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': ANTHROPIC_API_KEY,
                'anthropic-version': '2023-06-01',
                'anthropic-beta': 'prompt-caching-2024-07-31'
            },
            body: JSON.stringify({
                ...req.body,
                stream: true
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            res.write(`data: ${JSON.stringify({ error: errorData })}\n\n`);
            res.end();
            return;
        }

        // Stream the response from Anthropic to the client
        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
            const { done, value } = await reader.read();

            if (done) {
                res.end();
                break;
            }

            // Decode and forward the chunk
            const chunk = decoder.decode(value, { stream: true });
            res.write(chunk);
        }

    } catch (error) {
        console.error('Error:', error);
        res.write(`data: ${JSON.stringify({ error: { message: error.message } })}\n\n`);
        res.end();
    }
}
