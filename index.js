const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "f635a2007",
    database: "mydb"
});

let createDB = `CREATE TABLE Users (name VARCHAR(255), adress VARCHAR(255))`;

connection.connect((err) => 
{
    if (err)
    {
        console.log(err);
        return;
    }
    else console.log("CONNECTED!");

    connection.query(`SELECT * FROM Users`, (err, result) => 
    {
        if (err)
        {
            console.log(err);
            return;
        }

        console.log(result);
    });
});