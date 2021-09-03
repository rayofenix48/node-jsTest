//Se crean funciones con ayuda de objetos 
import {tasks} from './sample';
import User from './models/User';   //importamos todo el archivo user


export const resolvers ={
    Query :{
        hello: ()=>{
            return "Hello, world! with graphql"     //EDM7
        },
        edad() {
            return 5;
        },
        saludo(root,args) {              //para recibir el parámetro podemos ocupar saludo(args) || saludo(root,args)
            //Se puedo poner támbien cierto atributo por ejempo saludo(root, {name})       abajo se pone ${name}
            console.log(args.name);
            return `Hola cómo te va ${args.name}`;
        },

        saludo2(root,{name},context) {              //Se pone el parametro context para mostrarlo
            return `Hola cómo te va ${name}`;
            console.log(context);   //tambien se abrevia como ctx
        },
        tasks() {
            return tasks;
        },
        async users() {
           return await User.find();
        }

    },
    Mutation :{
        createTask (_,{input}) {
            input._id = tasks.length;
            tasks.push(input);
            console.log(input);
            return input;
        },

        async createUser (_,{input}) {
            //input.id = tasks.length;
            const newUser = new User(input)
            await newUser.save(); //
            console.log(newUser);
            return newUser; //
        },

       async deleteUser (_,{_id}) {
            return await User.findByIdAndDelete(_id);
        },

        async updateUser (_,{_id,input}) {
            return await User.findByIdAndUpdate(_id,input, {new :true}); //En mongo se debe de poner el nuevo registro si no nos dará el anterior
        }
    }

    
};