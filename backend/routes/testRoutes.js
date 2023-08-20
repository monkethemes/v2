const express = require('express');
const router = express.Router();
const helloWorld = require('../controllers/helloWorld');

router.get('/hello', helloWorld.run);

module.exports = router;
