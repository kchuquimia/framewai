const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/Banner.png') {
    const img = fs.readFileSync(path.join(__dirname, 'Banner.png'));
    res.writeHead(200, {'Content-Type': 'image/png'});
    res.end(img);
    return;
  }
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>FramewAI — Workforce Mobility Operations</title>
<style>
* { margin:0; padding:0; box-sizing:border-box; }
body { background:#0d0d0f; min-height:100vh; display:flex; align-items:center; justify-content:center; }
img { width:100vw; height:100vh; object-fit:cover; position:fixed; top:0; left:0; }
</style>
</head>
<body>
<img src="/Banner.png" alt="FramewAI — Workforce Mobility Operations" />
</body>
</html>`);
});

server.listen(process.env.PORT || 3000);
