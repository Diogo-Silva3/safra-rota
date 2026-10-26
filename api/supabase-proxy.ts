import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const { path, method, body } = request.query;
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const apiKey = process.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !apiKey) {
    return response.status(500).json({ error: 'Supabase config missing' });
  }

  const url = `${supabaseUrl}/rest/v1/${path}`;

  try {
    const result = await fetch(url, {
      method: method as string,
      headers: {
        'Content-Type': 'application/json',
        apikey: apiKey,
        Authorization: `Bearer ${apiKey}`,
      },
      body: body ? JSON.stringify(JSON.parse(body as string)) : undefined,
    });

    const data = await result.json();
    response.status(result.status).json(data);
  } catch (error) {
    response.status(500).json({ error: String(error) });
  }
}
