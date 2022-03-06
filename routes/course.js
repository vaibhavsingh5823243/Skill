const express = require('express');
const router = express.Router();
const database = require('./databases')
const config = require('./config');
const tableName = config.courseDb;
const cardsData = ["courseTitle", "courseDescription", "courseThumbNail", "coursePrice"];

router.get('/', (req, res) => {
    database.fetch(tableName, (cbData) => {
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
    database.insert(courseData, tableName, (cbData) => {
        res.send(cbData);
    })
})
module.exports = router;