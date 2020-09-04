'use strict'

// Config dotenv
require('dotenv').config()

// Imports
const app = require('./app')

const PORT = process.env.PORT || 3500

const init = async () => {
    app.listen(PORT, () => {
        console.log('Server has started successfully');
        console.log('http://localhost:' + PORT);
    })
}

init().catch(err => {
    console.log(":: SERVER ::", err, err.message);
})