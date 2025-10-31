// Vercel serverless function for generating dynamic suggestions
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

        const { conversationHistory, projectContext } = req.body;

        // Call Anthropic API to generate suggestions
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': ANTHROPIC_API_KEY,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-haiku-4-5-20251001',
                max_tokens: 500,
                system: `You are a helpful assistant that generates follow-up question suggestions.

Given a conversation history and project context, generate exactly 3 short, concise follow-up questions that:
1. Predict what the user might want to ask next
2. Are most useful to the user based on the conversation context
3. Are specific and actionable
4. Are varied (cover different aspects or directions)

Keep each suggestion under 60 characters. Return ONLY a JSON array of 3 strings, nothing else.

Example format:
["Question one?", "Question two?", "Question three?"]`,
                messages: [
                    {
                        role: 'user',
                        content: `Project context:\n${projectContext}\n\nConversation history:\n${JSON.stringify(conversationHistory, null, 2)}\n\nGenerate 3 follow-up question suggestions as a JSON array.`
                    }
                ]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            return res.status(response.status).json({ error: errorData });
        }

        const data = await response.json();
        const content = data.content[0].text;

        // Parse the JSON array from the response
        try {
            const suggestions = JSON.parse(content);
            return res.status(200).json({ suggestions });
        } catch (parseError) {
            console.error('Failed to parse suggestions:', content);
            // Fallback to default suggestions if parsing fails
            return res.status(200).json({
                suggestions: [
                    "Tell me more about that",
                    "What are the next steps?",
                    "Can you elaborate?"
                ]
            });
        }

    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: { message: error.message } });
    }
}
