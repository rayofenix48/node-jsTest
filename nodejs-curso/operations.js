function add(x1,x2){
    return x1+x2;
}

function substract(x1,x2){
    return x1-x2;
}

function multiply(x1,x2){
    return x1*x2;
}

function div(x1,x2){
    if (x2==0){
        console.log("La operación no se puede realizar");
    }else{
        return x1/x2;
    }
    
}


exports.add = add;
exports.substract = substract; //Esta parte exporta la propiedad de un objeto
exports.multiply = multiply;
exports.div = div;

/*Otra forma de poder hacer las exportación es poner lo siguiente
const Math = {};                 tambien puede ser una function o una var  {} realmente sigue siendo un objeto 
Math.add=add;
Math.substract=substract;
Math.multiply=multiply;
Math.div=div;

function Hello(name){
    console.log('Hola',name);
}
Module.exports = Math;
Tambien se puede exportar una función para ello sería 
Module.exports = Hello;*/
