// Aggregate-only feedback: no message text is ever received or logged. View in Vercel -> Logs.
module.exports = (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Use POST." });
  const b = req.body || {};
  const cats = (Array.isArray(b.cats) ? b.cats : []).slice(0, 10).map(c => String(c).slice(0, 16));
  console.log(JSON.stringify({ evt: "feedback", helpful: !!b.helpful, verdict: String(b.verdict || "").slice(0, 20), score: Math.max(0, Math.min(100, +b.score || 0)), cats, ai: !!b.ai, t: new Date().toISOString() }));
  res.status(200).json({ ok: true });
};
