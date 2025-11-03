# Mastra

<https://mastra.ai>
<https://openrouter.ai> (to get free tokens)
<https://openrouter.ai/docs/community/mastra> (integration of openrouter with mastra)

```sh
pnpm dev
```

```sh
curl -X POST http://localhost:4111/api/agents/weatherAgent/generate \
-H "Content-Type: application/json" \
-d '{"messages": ["How is the weather in London?"]}'
```
