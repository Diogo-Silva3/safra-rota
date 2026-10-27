import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// On Render: __dirname = /opt/render/project
// Build output should be at /opt/render/project/.output/public
const publicDir = path.join(__dirname, '.output', 'public');

console.log('[server] __dirname:', __dirname);
console.log('[server] publicDir:', publicDir);

// Serve static files
app.use(express.static(publicDir));

// SPA fallback - serve index.html for all routes
app.get('*', (req, res) => {
  const indexPath = path.join(publicDir, 'index.html');
  console.log('[server] GET', req.path, '-> serving', indexPath);
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('[server] Error:', err.message);
      res.status(404).send('404 Not Found');
    }
  });
});

app.listen(port, () => {
  console.log(`[server] ✓ listening on port ${port}`);
});
