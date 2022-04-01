const mysql = require ('mysql');


export const  createConnection =() =>{
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
  });
}



