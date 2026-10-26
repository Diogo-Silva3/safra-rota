import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// Build output is in .output/public at project root
// server.mjs is at /opt/render/project/server.mjs
// So __dirname = /opt/render/project and we go to .output/public
const publicDir = join(__dirname, '.output', 'public');

console.log('[server] __dirname:', __dirname);
console.log('[server] publicDir:', publicDir);

app.use(express.static(publicDir));

// SPA fallback
app.get('*', (req, res) => {
  const indexFile = join(publicDir, 'index.html');
  console.log('[server] Serving index.html:', indexFile);
  res.sendFile(indexFile, (err) => {
    if (err) {
      console.error('[server] Error:', err.message);
      res.status(404).send('404 - Not Found');
    }
  });
});

app.listen(port, () => {
  console.log(`[server] ✓ listening on port ${port}`);
});
