const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (!fs.existsSync('dist')) fs.mkdirSync('dist');
copyDir('css', 'dist/css');
copyDir('js', 'dist/js');
copyDir('projects', 'dist/projects');
fs.copyFileSync('index.html', 'dist/index.html');
console.log('Build complete');
