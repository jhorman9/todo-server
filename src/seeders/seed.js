const db = require('../utlis/database');
const Users = require('../models/users.model');
const Todos =  require('../models/todos.models');

const users = [
    {username: 'Jhorman', email:'Jhorman@hotmail.com', password: '1234'},
    {username: 'Steven', email:'Steven@hotmail.com', password: '1234'},
    {username: 'Luis', email:'Luis@hotmail.com', password: '1234'}
];  

const todos = [
    {title: 'tarea1',description: 'descripcion para 1',userId: 1},
    {title: 'tarea1',description: 'descripcion para 1',userId: 1},
    {title: 'tarea2',description: 'shlala gasd',userId: 2},
    {title: 'tarea2',description: 'descripcion para 2',userId: 2},
    {title: 'tarea3',description: 'shlalalsda',userId: 3},
    {title: 'tarea3',description: 'descripcion para 3',userId: 3},
];

const categories = [];

const todosCategories = [];

//create //insertar
//findOne, findAll, findByPk //unicoelemento//select * from//buscaunelementodelatabla
//update
//destroy

db.sync({force: true})
.then(() => {
    console.log('Iniciando con el sembradio malicioso');
    users.forEach((user) => Users.create(user)); //INSERT INTO users
    
    //Si lo hacemos sin el setTimeOut da este error:   original: error: inserción o actualización en la tabla «todos» viola la llave foránea «todos_user_id_fkey»
    setTimeout(() => {
        todos.forEach((todo) => Todos.create(todo));
    }, 100);
})
.catch(error => console.log(error));