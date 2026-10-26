import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// Try .output/public first (TanStack Start), fall back to dist
const publicDir = join(__dirname, '.output', 'public');
const distDir = join(__dirname, 'dist');

app.use(express.static(publicDir));
app.use(express.static(distDir));

// SPA fallback
app.get('*', (req, res) => {
  const indexPath = join(publicDir, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.sendFile(join(distDir, 'index.html'));
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
