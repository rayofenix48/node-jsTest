//const os = require('os');            Permite la interacción con la información de el SO.
const fs = require('fs');
fs.writeFile('texto.txt','linea uno',function(err){
    if (err){
        console.log(err);
    }
    console.log('Archivo Creado');
});

console.log('Ultima Linea de Código');

//const users = query('select * from users');

/*query('select * from tabla', function(err){
    if (err) return console.log(err);
}); */

fs.readFile('./texto.txt',function(err, data){
    if (err){
        console.log(err);
    }
    console.log(data.toString()); //data Muestra los datos en crudo por lo tanto se tiene que convertir en to_string


});