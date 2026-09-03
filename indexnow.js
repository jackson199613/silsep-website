/* IndexNow submitter — runs on Netlify build.
   Submits only URLs whose HTML changed in this deploy. Never fails the build. */
const { execSync } = require('child_process');
const fs = require('fs');
const https = require('https');

const HOST = 'silsep.com';
const KEY  = 'd1972ae8bf034450935d87601f5b74a9';

const toUrl = f =>
  'https://' + HOST + '/' + (f.endsWith('index.html') ? f.slice(0, -'index.html'.length)
                                                      : f.replace(/\.html$/, '/'));

function changedFiles() {
  try {
    const out = execSync('git diff --name-only HEAD~1 HEAD', { encoding: 'utf8', stdio: ['ignore','pipe','ignore'] });
    return out.split('\n').map(f => f.trim()).filter(f => f.endsWith('.html'));
  } catch (e) {
    console.log('IndexNow: no git history available, skipping (nothing submitted).');
    return [];
  }
}

const files = changedFiles();
const urls = [...new Set(files.map(toUrl))].slice(0, 500);

if (!urls.length) {
  console.log('IndexNow: no changed HTML pages, nothing to submit.');
  process.exit(0);
}

const body = JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls });
const req = https.request({
  hostname: 'api.indexnow.org', path: '/indexnow', method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(body) }
}, res => {
  console.log(`IndexNow: submitted ${urls.length} URL(s), status ${res.statusCode}`);
  res.resume();
  process.exit(0);
});
req.on('error', e => { console.log('IndexNow: submit failed (non-fatal):', e.message); process.exit(0); });
req.write(body); req.end();
setTimeout(() => { console.log('IndexNow: timeout, continuing build.'); process.exit(0); }, 15000);
