# Dia Chatbot Prototype

A minimal chatbot interface for chatting with your projects using Anthropic's Claude Sonnet 4.5 model.

## Features

- 💬 **Streaming responses** - Text streams in real-time as Claude generates it
- 🎨 **Purple-themed UI** - Modern chat interface with project sidebar
- 📊 **Project context** - Overview, Team, Goals, and Documents sections
- ☁️ **Vercel deployed** - Easy sharing with production URL

## Quick Start

### 1. Local Development
Start the local dev server (runs at http://localhost:3000):
```bash
npm start
```

This uses `vercel dev` which runs your app exactly like production. Make changes to `index.html` or `api/chat.js` and refresh your browser to see updates.

### 2. Deploy to Production
When you're ready to push changes to the live site:
```bash
# Commit your changes
git add .
git commit -m "Your change description"

# Deploy to production (pushes to GitHub + deploys to Vercel)
npm run deploy
```

**Production URL:** https://ai-chatbot-prototype-mu.vercel.app

---

## Recommended Workflow

```bash
# 1. Start local dev server
npm start

# 2. Make changes to files, test in browser at localhost:3000

# 3. When satisfied, deploy to production
npm run deploy
```

That's it! The `deploy` script will:
- Push your code to GitHub
- Deploy to Vercel production
- Update the live site

---

## Project Structure

- `index.html` - Frontend chat interface with project sidebar
- `api/chat.js` - Vercel serverless function for streaming Anthropic API responses
- `vercel.json` - Vercel configuration
- `.env` - Local environment variables (API key)
- `package.json` - Scripts and dependencies

## Environment Variables

The Anthropic API key is:
- **Local:** Stored in `.env` file (already configured)
- **Production:** Configured in Vercel dashboard (already set up)

No need to manage these manually - they're already configured!
