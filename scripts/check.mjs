import { readFileSync, existsSync } from 'node:fs';
const required = ['index.html', 'src/main.jsx', 'src/styles.css', 'vercel.json', 'package.json'];
for (const path of required) {
  if (!existsSync(path)) throw new Error('Missing ' + path);
}
const app = readFileSync('src/main.jsx', 'utf8');
if (/View Source Code|view source code/i.test(app)) throw new Error('Forbidden source button');
if (!app.includes('localStorage')) throw new Error('Demo interactions should be browser-local');
if (!app.includes('DEMO ACCOUNTS')) throw new Error('Demo sign-in missing');
// Guard against the creator-route crash caused by matching `/portfolio`
// against a configuration object keyed by `portfolio`.
const configMatch = app.match(/const configs=(\{[^\n]+\});/);
const lookupMatch = app.match(/const \[eye,title,desc\]=configs\[([^\]]+)\];/);
if (!configMatch || !lookupMatch) throw new Error('Creator detail route configuration not found');
const configs = JSON.parse(
  configMatch[1]
    .replace(/([,{])([a-z]+):/g, '$1"$2":')
    .replaceAll("'", '"')
);
for (const path of ['/portfolio', '/socials', '/campaigns', '/earnings']) {
  const lookup = lookupMatch[1].trim();
  const key = lookup === 'path.slice(1)' ? path.slice(1) : lookup === 'path' ? path : null;
  if (!key || !Array.isArray(configs[key]) || configs[key].length !== 3)
    throw new Error('Route config lookup fails for ' + path);
}
console.log('Static demo files and creator routes verified.');

