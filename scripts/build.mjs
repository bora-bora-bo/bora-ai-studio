import { mkdir, copyFile, readFile } from 'node:fs/promises';
const html = await readFile('src/index.html', 'utf8');
if (!html.includes('Bora AI Studio') || !html.includes('./app.js')) throw new Error('Invalid HTML entry point');
await mkdir('dist', { recursive: true });
await copyFile('src/index.html', 'dist/index.html');
await copyFile('src/app.js', 'dist/app.js');
console.log('Build complete: dist/index.html and dist/app.js');
