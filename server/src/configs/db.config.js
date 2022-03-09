const mysql = require('mysql2');
// const createConnetion = (host, db, user, passs) => {

//     const connection = mysql.createConnection({
//         host: String(host),
//         database: String(db),
//         user: String(user),
//         password: String(passs),
//     });
//     console.log(user, passs)

//     connection.connect(error => {
//         if (error) throw error;
//         console.log("Successfully connected to the database.");
//     });
// }

// Connection String to Database  
var mysqlConnection = mysql.createConnection({
    host: process.env.HOST_NAME,  
    database : process.env.DATABASE,
    user : process.env.MY_USERNAME,
    password : process.env.PASSWORD 
});  
  
// To check whether the connection is succeed for Failed while running the project in console.  
mysqlConnection.connect((err) => {  
    if(!err) {  
        console.log("Db Connection Succeed");  
    }  
    else{  
        console.log("Db connect Failed \n Error :" + JSON.stringify(err,undefined,2));  
    }  
});  

module.exports = {mysqlConnection};