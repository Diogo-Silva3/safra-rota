import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// Serve static files from .output/public (TanStack Start build output)
const publicDir = join(__dirname, '.output', 'public');

app.use(express.static(publicDir));

// SPA fallback - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(join(publicDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
