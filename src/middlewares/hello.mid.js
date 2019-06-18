import { Middleware } from 'reus';

export default class HelloMiddleware extends Middleware {
  async index() {
    const { next } = this;
    console.log('before hello');
    return next();
  }
}
