import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// Build output is in .output/public at project root
// __dirname is /opt/render/project, so we need to go to .output/public
const publicDir = join(__dirname, '.output', 'public');

console.log('Serving from:', publicDir);

app.use(express.static(publicDir));

// SPA fallback
app.get('*', (req, res) => {
  const indexFile = join(publicDir, 'index.html');
  console.log('Attempting to serve:', indexFile);
  res.sendFile(indexFile, (err) => {
    if (err) {
      console.error('Error serving index.html:', err.message);
      res.status(404).send('Not Found');
    }
  });
});

app.listen(port, () => {
  console.log(`✓ Server running on port ${port}`);
});
