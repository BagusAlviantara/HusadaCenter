const Sequelize = require('sequelize');
// initialize an instance of Sequelize
const db = new Sequelize({
    database: 'husada_center',
    username: 'root',
    password: '',
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = db;

// check the databse connection
db
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));


// const mysql = require('mysql');
// // create configuration 
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'husada_center',
//     multipleStatements: true
// });

// // connect database
// // db.connect((err) => {
// //     if (err) throw err;
// //     console.log('MySQL Connected...');
// // });

// // check the databse connection
// db
//     .authenticate()
//     .then(() => console.log('Connection has been established successfully.'))
//     .catch(err => console.error('Unable to connect to the database:', err));
// module.exports = db;
// const Sequelize = require('sequelize');