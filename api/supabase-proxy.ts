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
    const body = request.method !== 'GET' && request.method !== 'HEAD' 
      ? (typeof request.body === 'string' ? request.body : JSON.stringify(request.body))
      : undefined;

    const result = await fetch(targetUrl, {
      method: request.method,
      headers: {
        'Content-Type': 'application/json',
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`,
      },
      body,
    });

    const text = await result.text();
    
    // Set proper headers
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, apikey');
    
    // Return raw response body with proper status
    response.status(result.status).send(text);
  } catch (error) {
    response.setHeader('Content-Type', 'application/json');
    response.status(500).json({ error: String(error) });
  }
}
