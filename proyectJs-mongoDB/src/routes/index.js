const express = require('express')
const router = express.Router();

router.get('/', function (req, res) {
    res.send('Este es el Index');
})
module.exports = router;
router.get('/about', function (req, res) {
    res.send('Esto es el about');
})