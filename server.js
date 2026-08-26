const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let urlPath = req.url;

  // Route redirects & rewrites for mockups
  if (urlPath === '/' || urlPath === '/mockup1') {
    urlPath = '/mockup1/index.html';
  } else if (urlPath === '/mockup2') {
    urlPath = '/mockup2/index.html';
  } else if (urlPath === '/mockup3') {
    urlPath = '/mockup3/index.html';
  }

  // Resolve file path
  let filePath = path.join(__dirname, urlPath);
  
  // Security check: ensure path stays in directory
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    res.end('403 Forbidden');
    return;
  }

  // Check if file exists
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback for directory routing: check if index.html exists inside it
      const fallbackPath = path.join(filePath, 'index.html');
      fs.stat(fallbackPath, (fallbackErr, fallbackStats) => {
        if (!fallbackErr && fallbackStats.isFile()) {
          serveFile(fallbackPath, res);
        } else {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
        }
      });
    } else {
      serveFile(filePath, res);
    }
  });
});

function serveFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('500 Internal Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
}

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`- Mockup 1: http://localhost:${PORT}/mockup1`);
  console.log(`- Mockup 2: http://localhost:${PORT}/mockup2`);
  console.log(`- Mockup 3: http://localhost:${PORT}/mockup3`);
});
