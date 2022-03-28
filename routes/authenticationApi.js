const express = require('express');
const router = express.Router();
const auth = require('./authentication');

router.post('/emailverification', auth.verification);
router.post('/forgetpassword', auth.verification);
router.post('/register', auth.registration);
router.post('/login', auth.login);
router.post('/update', auth.update);


module.exports = router;

