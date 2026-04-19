import websocket from '@fastify/websocket';
import type { FastifyInstance } from 'fastify';
import type { RawData } from 'ws';

export async function registerNativeWebsocket(app: FastifyInstance) {
  await app.register(websocket);

  app.get('/native-ws', { websocket: true }, (socket) => {
    socket.on('message', (message: RawData) => {
      socket.send(message);
    });
  });
}
