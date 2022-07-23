const express = require('express'); 
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001; 
const app = express(); 

// const req = require('express/lib/request');
// const res = require('express/lib/response');


// express middleware 
app.use(express.urlencoded({ extended: false})); 
app.use(express.json()); 

// Use api routes 
app.use('/api', apiRoutes); 

// Default response for any other requests (notfound)
app.use((req, res) =>{
    res.status(404).end(); 
});

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});