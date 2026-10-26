import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 5000;

// Use process.cwd() to get ACTUAL working directory on Render
// On Render: process.cwd() = /opt/render/project
const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, '.output', 'public');

console.log('[server] project root:', projectRoot);
console.log('[server] serving from:', publicDir);

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
