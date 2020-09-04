'use strict'
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const app = express()

// Middlewares
app
    .use(cors())
    .use(helmet())

    // Body parser
    .use(express.json())
    .use(express.urlencoded({ extended: true }))

module.exports = app