alert('HolaMundo');
var nombre="Victor Celis";
var edad=18;

var concatenacion= nombre + "" + edad;
var datos= document.getElementById("datos");
datos.innerHTML=concatenacion;
//document.write('texto');
//document.write(+funcion);
//document.write(+1raFuncion+2daFuncion);
//Inner permite escribir texto e manera dinámica
datos.innerHTML= `
Hola soy un template
Mi nombre es ${nombre}
y tengo ${edad} años `
