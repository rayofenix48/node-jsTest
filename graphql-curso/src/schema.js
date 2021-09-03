import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";
//Type Query son consultas que se encuentran para saber que puede buscar en el .json
//Mutation va a modificar e insertar datos que manda el usuario
const typeDefs = `
    type Query {
        hello: String  
        edad: Int
        saludo(name : String!): String 
        saludo2(name : String!): String 
        tasks : [Task]     
        users : [User] 
    }
    
    type Task{
        _id: ID
        title: String!
        description: String!
        number: Int
    }

    type User{
        _id: ID
        firstname: String!
        lastname: String!
        age: Int
    }

    type Mutation{
        createUser(input: UserInput): User
        createTask(input: TaskInput): Task
        deleteUser(_id: ID): User
        updateUser(_id: ID, input: UserInput): User
        
    }

    input TaskInput{
        title: String!
        description: String!
        number: Int
    }

    input UserInput{
        firstname: String!
        lastname: String!
        age: Int
    }
`;    
//Haciendo uso de typeDefs le indicamos que es lo que puede consultar.  
//El simbolo ! hace referencia a parametro obligatorio o error

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers, //En tu parametro resolvers mete el objeto de la función resolvers
})

/* Para insertar en Graphiql la mutación tendriamos que poner algo así
mutation{
  createUser(input: {
    firstname: "joe",
    lastname : "Millan"
    age: 40
  }){
    _id
    firstname
    lastname
    age
  }
}   */

/*Para consultar la query de todo lo que hemos ingresado hacemos 
query{
  tasks{
    _id
    title
    description
    number
    
  }
}

*/

/*Para consultar támbien se puede poner así
{
  users{
    _id
    firstname
    lastname
    age
  }
}

Para actualizar pondriamos lo siguiente

mutation{
  updateUser(_id:"6130fa574cbf04ce9e8c861d",
    input: {
    firstname: "Juan"  
    lastname: "Pedro"
    age :32
  }
  ){                                              
    _id
    firstname
    lastname
    age
    
  }
}

*/