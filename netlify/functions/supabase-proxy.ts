import { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
  const supabaseUrl = 'https://pixelecsswtmdglynsyi.supabase.co';
  const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpeGVsZWNzc3d0bWRnbHluc3lpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk3Mjc0MDksImV4cCI6MjEwNTMwMzQwOX0.pAvnk6N9jN3zI6Jl75nl_UMpFthzo9raE8ETFb8OdMk';

  const path = event.path.replace('/.netlify/functions/supabase-proxy', '');
  const targetUrl = `${supabaseUrl}${path}${event.rawUrl.split('?')[1] ? `?${event.rawUrl.split('?')[1]}` : ''}`;

  try {
    const body = event.body ? (typeof event.body === 'string' ? event.body : JSON.stringify(event.body)) : undefined;

    const result = await fetch(targetUrl, {
      method: event.httpMethod,
      headers: {
        'Content-Type': 'application/json',
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`,
      },
      body,
    });

    const text = await result.text();

    return {
      statusCode: result.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, apikey',
      },
      body: text,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: String(error) }),
    };
  }
};

export { handler };
