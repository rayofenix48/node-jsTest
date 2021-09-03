//const express = require('express');
//const {graphqlHTTP} = require('express-graphql');      Estos son equivalentes en antiguas versiones
//const schema = require('./schema.js');

import express from 'express';                      // Este es en versiones más nuevas
import {graphqlHTTP} from "express-graphql";                   //Función intermediaria para graphql
//import { graphqlHTTP } from 'express-graphql';        //Se puede desde las 2 maneras
import schema from "./schema";
import { connect } from './database';

const app = express();
connect();

app.get('/',(req,res) => {
    res.json({message: 'Hello, world'})
});


//const MyGraphQLSchema={};

 //Se abre una ruta en el servidor y se procesa la información
app.use('/graphql', graphqlHTTP({
    schema: schema ,
    graphiql: true,
    context:  {                 //Ayuda a pasar todos los datos a los resolvers
        messageId : 'test'
    }
}));

app.listen(3000, ()=>console.log('Server on port 3000'));
//app.set('port', process.env.PORT || 3000);
//app.set('port', 3000);
//app.listen(app.get('port'), ()=>console.log(app.get('port')))


