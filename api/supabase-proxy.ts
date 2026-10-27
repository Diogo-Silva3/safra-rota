import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const supabaseUrl = 'https://pixelecsswtmdglynsyi.supabase.co';
  const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpeGVsZWNzc3d0bWRnbHluc3lpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk3Mjc0MDksImV4cCI6MjEwNTMwMzQwOX0.pAvnk6N9jN3zI6Jl75nl_UMpFthzo9raE8ETFb8OdMk';

  // Parse the path from URL - remove /api/supabase prefix
  const pathSegments = request.url?.split('/api/supabase')[1] || '';
  const searchParams = new URL(request.url || '', 'http://localhost').search;
  const targetUrl = `${supabaseUrl}${pathSegments}${searchParams}`;

  try {
    const result = await fetch(targetUrl, {
      method: request.method,
      headers: {
        'Content-Type': 'application/json',
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`,
      },
      body: request.method !== 'GET' && request.method !== 'HEAD' ? JSON.stringify(request.body) : undefined,
    });

    const contentType = result.headers.get('content-type');
    const data = contentType?.includes('application/json') ? await result.json() : await result.text();
    
    response.status(result.status).json(data);
  } catch (error) {
    response.status(500).json({ error: String(error) });
  }
}
