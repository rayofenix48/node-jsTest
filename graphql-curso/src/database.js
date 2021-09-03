
import mongoose from 'mongoose';

export async function connect() {  // exporta la función para que se pueda conectar y async hace que la función sea asincrona
    try {
        await mongoose.connect('mongodb://localhost/mongodbgraphql',{      //await espera a que se acabe de conectar para mandar el mensaje
        useNewUrlParser: true
        })
    
        console.log('>>>DB is connected');
    } catch (error) {
        console.log("Algo ocurrio y no se pudo realizar la conexión");
        console.log(error);
    }
}

