//Initialization
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const methodOverride =require('method-override');
const app = express();
require('./database');

//settings
app.set('port',process.env.PORT ||3000); //Si existe un puerto en la máquina ocupalo si no ocupa el 3000
app.set('views', path.join(__dirname,'views')); //sirve para cambiar el directorio de las vistas que son las que se mantienen estáticas
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),  //Damos los parametros de las carpetas
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));

app.set('view engine', 'hbs'); //Para poder utilizar los hbs 

//middlewares
app.use(express.urlencoded({extended: false})); //Sirve para recibir datos sin aceptar imagenes o algo similar
app.use(methodOverride('_method')); //Podermos ocupar otros métodos cómo put y delete.   _method se ocupa para el formulario
app.use(session({
    secret: 'chikilinn95',
    resave: true,                       //Sirve para autenticar al usuario
    saveUninitialized: true
}));


//Global variables

//Routes
app.use(require('./routes/index.js'));
app.use(require('./routes/notes.js'));
app.use(require('./routes/users.js'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));
//Server is listening on
app.listen(app.get('port'), ()=>{     // ()=> es igual a function ()
    console.log('listening on port', app.get('port'));
});