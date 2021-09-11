import { GraphQLSchema,GraphQLObjectType,GraphQLString,graphql } from 'graphql';
import {RootQueryType,RootMutationType} from './resolvers';
 
//-------------------------------------------------- creamos el esquema para Graphql
export const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
})

/*

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      hello: {
        type: GraphQLString,
        resolve: () => 'Hello world!'
      }
    })
  })
});

resolve(parent, args) {
    const newGadget = new Gadget({
      name: <a href="http://args.name" class="link link-url" target="_blank" rel="external nofollow noopener noreferrer">args.name</a>,
      release_date: args.release_date,
      by_company: args.by_company,
      price: args.price,
    })

    return newGadget.save();
  } */








/* Documentación para realizar consultas y mutaciones

query{
  authors{
    name
  }
}

mutation{
	addAuthor(name: "Autor1 "){
    id
    name
  }
}
*/
