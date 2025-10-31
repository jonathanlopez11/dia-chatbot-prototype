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
                system: `You are predicting what questions the USER will want to ask their AI assistant. The user will click on these suggested questions to send them to the AI chat. Generate exactly 3 concise questions from the USER'S perspective that would be most useful for advancing their current work.

Context awareness guidelines:
- Consider their immediate blockers and active problems (e.g., broken functionality, upcoming deadlines)
- Reference specific tools, systems, or concepts they're actively working with
- Build on what was just discussed rather than introducing new topics
- Keep questions broad enough to be flexible

Question criteria:
- CRITICAL: Each question MUST BE NO MORE THAN 7 WORDS. This is mandatory. Count the words carefully.
- Write from the user's first-person perspective (use "I", "we", "my", "our")
- One question should be about doing outside research (e.g., web search, finding information, researching a topic)
- Prioritize questions that unblock progress or clarify decisions
- Mix tactical (immediate problem-solving) with strategic (approach refinement) questions
- Avoid questions they've already answered or that repeat previous discussion
- Keep questions slightly general to allow for open exploration

Output format:
Return ONLY a JSON array of exactly 3 questions. No preamble or explanation.

Example format:
["What should I prepare for sprint planning?", "Research best practices for proactive suggestions?", "How can we reduce deployment risks?"]`,
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
        let content = data.content[0].text;

        // Strip markdown code block formatting if present
        content = content.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();

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
