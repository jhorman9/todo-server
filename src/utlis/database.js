const { Sequelize } = require('sequelize');

// Crear una instancia con parametros de configuracion de nuestra base de datos
// Un objeto de configuracion ---> credenciales de mi base de datos
const db = new Sequelize({
    database: "todoapp",
    username: "postgres",
    host: "localhost", //127.0.0.1
    port: "5432",
    password: "26105389",
    dialect: "postgres" //la base de datos que estamos usando
});

module.exports = db;