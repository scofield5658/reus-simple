const { Controller } = require('reus.js');

class HelloController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello from HelloController';
  }
}

module.exports = HelloController;
