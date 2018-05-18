const mysql = require('mysql');
require('dotenv').load();

let connection;
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
   connection = mysql.createConnection({
        // host: 'localhost',
        host: process.env.DB_HOST,
        // password: '',
        password: process.env.DB_PASSWORD,
        // user: 'root',
        user: process.env.DB_USER,
        // database: 'burgers_db'
        database: process.env.DB_DATABASE
    });
}
connection.connect( err => {
    if(err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`)

});

module.exports = connection;