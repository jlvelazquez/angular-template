/* eslint-disable no-console, no-process-env */

const Hapi = require('hapi');
const Boom = require('boom');
const chalk = require('chalk');
const { v4 } = require('uuid');

const server = new Hapi.Server();

server.connection({
  host: '0.0.0.0',
  port: Number(process.env.PORT) || 1337,
  routes: {
    cors: {
      origin: ['*']
    }
  }
});

server.route({
  method: 'POST',
  path: '/api/login',
  handler: function (request, reply) {
    const { email, password } = request.payload;
    if (email === 'user@user.com' && password === '123456') {
      reply({ token: v4() });
    } else {
      reply(Boom.unauthorized('Bad credentials!'));
    }
  }
});

server.start(error => {
  if (error) {
    throw error;
  }
  console.log(chalk.blue(`Server running at:${ server.info.uri }`));
});
