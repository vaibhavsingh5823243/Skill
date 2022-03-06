const express = require('express');
const router = express.Router()
const database = require('./databases');
const config = require("./config");
const tableName = config.instructorDb;
const cardsData = ['instructorName', 'instructorAbout', 'instructorDesignation', 'instructorImage']

router.post('/add', (req, res) => {
    var instructorData = req.body;
    database.insert(instructorData, tableName, (cbData) => {
        res.send(cbData);
    })
})

router.get('/', (req, res) => {
    database.fetch(tableName, (cbData) => {
        res.send(cbData);
    })
})

router.get('/cards', (req, res) => {
    database.fetch(tableName, (cbData) => {
        res.send(cbData)
    }, cardsData)
})

module.exports = router;