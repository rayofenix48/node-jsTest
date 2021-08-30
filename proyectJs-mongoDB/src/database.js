const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/notes-db-app')
.then(db=>console.log('Conexión Realizada correctamente'))
.catch(err=>console.error(err));