# Mastra

<https://mastra.ai>

## With Open Router

<https://openrouter.ai> (to get free tokens)
<https://openrouter.ai/docs/community/mastra> (integration of openrouter with mastra)

Add to `.env`:

```sh
OPENROUTER_API_KEY=...
```
## With Google AI

<https://aistudio.google.com/> (to get free tokens)
<https://mastra.ai/models/providers/google> (integration of google ai with mastra)

Add to `.env`:

```sh
GOOGLE_GENERATIVE_AI_API_KEY=...
```

## Commands

```sh
pnpm dev
```

```sh
curl -X POST http://localhost:4111/api/agents/weatherAgent/generate \
-H "Content-Type: application/json" \
-d '{"messages": ["How is the weather in London?"]}'
```
