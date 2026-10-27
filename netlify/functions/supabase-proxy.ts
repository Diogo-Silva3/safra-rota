import { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
  const supabaseUrl = 'https://pixelecsswtmdglynsyi.supabase.co';
  const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpeGVsZWNzc3d0bWRnbHluc3lpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk3Mjc0MDksImV4cCI6MjEwNTMwMzQwOX0.pAvnk6N9jN3zI6Jl75nl_UMpFthzo9raE8ETFb8OdMk';

  try {
    // Parse path - remove /.netlify/functions/supabase-proxy prefix
    const path = event.path.replace('/.netlify/functions/supabase-proxy', '') || '/';
    
    // Construct full URL with query string
    const url = new URL(`${supabaseUrl}${path}`);
    if (event.queryStringParameters) {
      Object.entries(event.queryStringParameters).forEach(([key, value]) => {
        if (value) url.searchParams.append(key, value);
      });
    }

    // Prepare request body
    let body: any = undefined;
    if (event.body && ['POST', 'PUT', 'PATCH'].includes(event.httpMethod)) {
      body = event.isBase64Encoded ? Buffer.from(event.body, 'base64').toString() : event.body;
    }

    console.log(`Proxying ${event.httpMethod} ${url.toString()}`);

    const result = await fetch(url.toString(), {
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
      body: text || '{}',
    };
  } catch (error) {
    console.error('Proxy error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: String(error) }),
    };
  }
};

export { handler };
