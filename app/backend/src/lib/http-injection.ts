import type { InjectOptions } from 'light-my-request';
import type { FastifyInstance } from 'fastify';

export function injectHttp(app: FastifyInstance, options: InjectOptions | string) {
  return app.inject(options);
}
