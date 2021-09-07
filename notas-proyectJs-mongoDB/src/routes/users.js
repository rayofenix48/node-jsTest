const express = require('express')
const router = express.Router();

router.get('/users/signin', function (req, res){
    res.render('/users/signin');
    //res.send('Ingresando a la app');
});

router.get('/users/signout', function (req, res){
    res.render('/users/signout');
    //res.send('Formulario de autenticación');
});

module.exports = router;
