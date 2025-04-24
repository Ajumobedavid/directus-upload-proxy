
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST method is allowed" });
  }

  const { url, data } = req.body;

  const response = await fetch(process.env.DIRECTUS_ENDPOINT, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.DIRECTUS_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url, data })
  });

  const result = await response.json();
  res.status(response.status).json(result);
}
