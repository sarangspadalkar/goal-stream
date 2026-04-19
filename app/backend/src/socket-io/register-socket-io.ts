import type { FastifyInstance } from 'fastify';
import { Server } from 'socket.io';
import type { ReadonlyDeep } from 'type-fest';
import { createMatchId, type MatchEventPayload } from '@goal-stream/universal';

type ConnectionNotice = ReadonlyDeep<MatchEventPayload>;

export async function registerSocketIo(app: FastifyInstance) {
  const io = new Server(app.server, {
    cors: { origin: true },
  });

  io.on('connection', (socket) => {
    const notice: ConnectionNotice = {
      matchId: createMatchId('demo'),
      type: 'info',
      message: 'connected',
    };

    socket.emit('match:event', notice);
  });

  app.addHook('onClose', async () => {
    await new Promise<void>((resolve) => {
      io.close(() => {
        resolve();
      });
    });
  });
}
