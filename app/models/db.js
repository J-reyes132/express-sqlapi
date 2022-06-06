const mysql = require('mysql');
const dbConfig = require('../config/db.config');

// Creando la conexion a la base de datos
const connection = mysql.createConnection({ 
    host : dbConfig.HOST,
    user : dbConfig.USER,
    password : dbConfig.PASSWORD,
    database : dbConfig.DB
});

// Abriendo la conexion a My Sql
connection.connect(error =>{
    if(error) throw error;
    console.log("Conected to DB");
});

module.exports = connection;
