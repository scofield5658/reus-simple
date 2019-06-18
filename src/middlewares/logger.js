import { Middleware } from 'reus';

export default class LogMiddleware extends Middleware {
  async index() {
    const { ctx, next } = this;
    console.log(`[${new Date()}]${ctx.url}:${ctx.method}`);
    return next();
  }
}
