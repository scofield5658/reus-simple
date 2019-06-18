import { Controller } from 'reus';

export default class HelloController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello from HelloController';
  }
}
