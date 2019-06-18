const logger = require('./middlewares/logger');
const routers = require('./routers');

module.exports = {
  port: 5658,
  routers,
  middlewares: [logger],
};
