const { db } = require('./db/db')
const { readdirSync } = require('fs')
const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000; // Set a default port if PORT is not defined in .env

// Middleware
app.use(express.json());
app.use(cors());

//routes
readdirSync('./routes').map((route) => {
    app.use('/api/v1', require('./routes/' + route))
})
const server = () => {
    db()
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    }).on
        ('error', (err) => {
            console.error(`Error starting the server: ${err.message}`);
        });
}


server();