const express = require('express'); 
const PORT = process.env.PORT || 3001; 
const app = express(); 
const mysql = require('mysql2'); 

// express middleware 
app.use(express.urlencoded({ extended: false})); 
app.use(express.json()); 

// connect to database 
const db = mysql.createConnection(
    {
        host: 'localhost',
        // mysql username,
        user: 'root',
        //mysql password
        password:'spencer123',
        database: 'election'
    },
    console.log('Connected to the election database')
);

db.query(`SELECT * FROM candidates`, (err, rows) =>{
    console.log(rows);
});

// Default response for any other requests (notfound)
app.use((req, res) =>{
    res.status(404).end(); 
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 