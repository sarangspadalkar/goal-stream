import portfinder from 'portfinder';
import { createApp } from './create-app.js';

async function main() {
  const app = await createApp();
  const port = await portfinder.getPortPromise({ port: 3000, host: '127.0.0.1' });
  await app.listen({ port, host: '127.0.0.1' });
  app.log.info({ port }, 'listening');
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
