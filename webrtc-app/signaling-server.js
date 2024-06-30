const WebSocket = require('ws');

const port = 8080;
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('A new client connected');

  ws.on('message', (message, isBinary) => {
    const data = isBinary ? message : message.toString();
    // Simply broadcasting the message to every client in this exercise
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log(`WebSocket signaling server is running on ws://localhost:${port}`);
