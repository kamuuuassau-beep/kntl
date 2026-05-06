export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { link, timestamp } = req.body || {};
  if (!link) return res.status(400).json({ error: 'Missing link' });
  console.log(JSON.stringify({ link, ts: timestamp || new Date().toISOString() }));
  return res.status(200).json({ ok: true, recorded: new Date().toISOString() });
}
