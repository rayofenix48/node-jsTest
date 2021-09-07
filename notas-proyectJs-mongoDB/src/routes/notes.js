const express = require('express')
const router = express.Router();

router.get('/notes', function (req, res){
    res.send('Estas son las notas de la Base de Datos');
});




module.exports = router;
