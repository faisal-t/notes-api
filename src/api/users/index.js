const UsersHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'users',
  varsion: '1.0.0',
  register: async (server, { service, validator }) => {
    const usersHandler = new UsersHandler(service, validator);
    server.route(routes(usersHandler));
  },
};
