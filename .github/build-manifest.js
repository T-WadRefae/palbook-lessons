// Generates manifest.json — an index of every lesson HTML file in this repo
// with its <title>, served on GitHub Pages so the PalBook site can discover
// newly pushed lessons without hitting the GitHub API.
// Run: node .github/build-manifest.js
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SKIP_DIRS = new Set(['.git', '.github', 'node_modules', 'media', 'assets']);

function walk(dir, rel = '') {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const relPath = rel ? `${rel}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      out.push(...walk(path.join(dir, entry.name), relPath));
    } else if (entry.isFile() && /\.html$/i.test(entry.name)) {
      out.push(relPath);
    }
  }
  return out;
}

function extractTitle(file) {
  try {
    const head = fs.readFileSync(file, 'utf8').slice(0, 8000);
    const m = head.match(/<title[^>]*>([^<]*)<\/title>/i);
    return m ? m[1].trim().replace(/\s+/g, ' ') : '';
  } catch {
    return '';
  }
}

const files = walk(ROOT)
  .sort()
  .map((p) => ({ path: p, title: extractTitle(path.join(ROOT, p)) }));

const manifest = {
  baseUrl: 'https://t-wadrefae.github.io/palbook-lessons/',
  count: files.length,
  files,
};

fs.writeFileSync(path.join(ROOT, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`manifest.json written with ${files.length} files`);
