# Dia Chatbot Prototype

A minimal chatbot interface for chatting with your projects using Anthropic's Claude Sonnet 4.5 model.

## Features

- Claude Sonnet 4.5 integration with conversation context
- Project information sidebar (Overview, Team, Goals, Documents)
- Purple-themed UI inspired by modern chat interfaces
- Deployed on Vercel for easy sharing

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
# Edit .env and add your ANTHROPIC_API_KEY
```

3. Start local dev server:
```bash
vercel dev
```

## Deployment

This project is configured for Vercel deployment:

1. Deploy to Vercel:
```bash
vercel
```

2. Set environment variable in Vercel:
```bash
vercel env add ANTHROPIC_API_KEY
```

Or set it via the Vercel dashboard.

## Project Structure

- `index.html` - Frontend chat interface with project sidebar
- `api/chat.js` - Vercel serverless function that proxies API requests to Anthropic
- `vercel.json` - Vercel configuration
- `package.json` - Node.js dependencies
