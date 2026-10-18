# ScamSpotter
Static front end + one serverless function (`api/analyze.js`) that calls Gemini.

1. Get a key at aistudio.google.com/apikey
2. Vercel -> Project -> Settings -> Environment Variables: add `GEMINI_API_KEY` (optional: `GEMINI_MODEL`, default gemini-2.5-flash)
3. Deploy (`npx vercel --prod`, or drag the folder into vercel.com/new), then redeploy after adding the variable
Local test: `npx vercel dev`
The key stays on the server. Never put it in index.html.
# Scam-Spotter
