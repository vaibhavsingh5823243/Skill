require('dotenv').config({});
const express = require('express');
const router = express.Router()
const database = require('./databases');
const tableName = process.env.instructorDb;
const cardsData = ['name', 'designation', 'description', 'course', 'image']//process.env.instructorSlideData;

router.post('/add', (req, res) => {
    var instructorData = req.body;
    instructorData['uniqueCode'] = "INS" + new Date().getTime();
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

router.post('/update', (req, res) => {
    let userInfo = req.body;
    database.update(userInfo, tableName, (cbData) => {
        if (cbData) {
            var filter = { email: userInfo['email'] };
            database.filter(tableName, filter, (userInfo) => {
                res.send(userInfo);
            })
        }
        else {
            res.send(`${cbData}`);
        }
    })

})

module.exports = router;
