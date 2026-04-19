import Fastify from 'fastify';
import type { FastifyInstance } from 'fastify';
import { registerNativeWebsocket } from './websocket/register-native-websocket.js';
import { registerSocketIo } from './socket-io/register-socket-io.js';

export async function createApp(): Promise<FastifyInstance> {
  const app = Fastify({ logger: true });

  app.get('/health', async () => ({ ok: true }));

  await registerNativeWebsocket(app);
  await registerSocketIo(app);

  return app;
}
