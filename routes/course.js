require('dotenv').config();
const express = require('express');
const router = express.Router();
const database = require('./databases');

const tableName = process.env.courseDb;
const cardsData = process.env.cardsData;

router.post('/', (req, res) => {
    var jsonData = req.body;
    database.filter(tableName,jsonData,(cbData) => {
        res.send(cbData);
    })
});

router.get('/cards', (req, res) => {
    database.fetch(tableName, (cbData) => {
        res.send(cbData);
    }, cardsData);
})

router.post('/add', (req, res) => {
    var courseData = req.body;
    courseData["courseCode"] = 'CRSE'+new Date().getTime();
    database.insert(courseData, tableName, (cbData) => {
        res.send(cbData);
    })
})
module.exports = router;

