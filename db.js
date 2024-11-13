//db.js

const mysql = require('mysql2/promise');

// Crear el pool de conexiones con las credenciales de Clever Cloud
const conn = mysql.createPool({
    host: 'bqktyn5xojxigl15ek4z-mysql.services.clever-cloud.com', // Host proporcionado por Clever Cloud
    user: 'ujcwxefkkk7v9sxg', // Usuario proporcionado por Clever Cloud
    password: 'VlTlAHiSbNDPDT9HTYdJ', // Contraseña proporcionada por Clever Cloud
    database: 'bqktyn5xojxigl15ek4z', // Nombre de la base de datos proporcionado por Clever Cloud
    port: 3306, // Puerto por defecto de MySQL
    waitForConnections: true, // Esta opción mejora la eficiencia de las conexiones
    connectionLimit: 10, // Número de conexiones concurrentes
    queueLimit: 0 // Sin límite de cola de conexiones
});

// Conexión exitosa
console.log('Conectado a la base de datos MySQL en Clever Cloud');

module.exports = conn;







/*
const mysql = require('mysql2/promise');

//const conn = mysql.createConnection({
const conn = mysql.createPool({
    host: 'localhost', // Cambia esto si es necesario
    user: 'root',      // Tu usuario de MySQL
    password: '',      // Tu contraseña de MySQL
    database: 'agendamedica1' // Nombre de tu base de datos
});

console.log('Conectado a la base de datos MySQL');
module.exports = conn;*/






//        netstat -ano | findstr :3000

//           taskkill /PID 6960 /F