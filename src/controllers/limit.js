import { Controller } from 'reus';

export default class LimitController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello from LimitController';
  }
}
