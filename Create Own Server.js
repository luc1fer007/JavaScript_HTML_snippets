// hello-server.js
const http = require("http");
const myName = "lucifer";

const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { "Content-Type": "HTML" });

  // Send response
  res.end(`Hello, I'm ${myName}! Saying Hi from my first Node.js server!`);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log("Press Ctrl+C to stop the server");
});
