import { readFileSync, existsSync } from 'node:fs';
const required = ['index.html', 'src/main.jsx', 'src/styles.css', 'vercel.json', 'package.json'];
for (const path of required) {
  if (!existsSync(path)) throw new Error('Missing ' + path);
}
const app = readFileSync('src/main.jsx', 'utf8');
if (/View Source Code|view source code/i.test(app)) throw new Error('Forbidden source button');
if (!app.includes('localStorage')) throw new Error('Demo interactions should be browser-local');
if (!app.includes('DEMO ACCOUNTS')) throw new Error('Demo sign-in missing');
console.log('Static demo files and portfolio requirements verified.');
