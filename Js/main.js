alert('HolaMundo');
var nombre="Victor Celis";
var edad=18;

var concatenacion= nombre + "" + edad;
var datos= document.getElementById("datos");
datos.innerHTML=concatenacion;

datos.innerHTML= `
Hola soy un template
Mi nombre es ${nombre}
y tengo ${edad} años `
