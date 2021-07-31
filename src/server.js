/* eslint-disable quotes */
/* eslint-disable eol-last */

// konfigurasi dotenv
require('dotenv').config();

// konfigurasi hapi
const Hapi = require("@hapi/hapi");

// konfigurasi notes
const notes = require("./api/notes");
const NotesService = require('./services/postgres/NotesService');
const NotesValidator = require("./validator/notes");

// konfigurasi users
const users = require("./api/notes");
const UsersService = require('./services/postgres/UsersService');
const UsersValidator = require("./validator/users");

const init = async () => {
  const notesService = new NotesService();
  const usersService = new UsersService();

  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  await server.register({
    plugin: notes,
    options: {
      service: notesService,
      validator: NotesValidator,
    },
    plugin: users,
    options: {
      service: usersService,
      validator: UsersValidator,
    },
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
