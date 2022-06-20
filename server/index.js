var express = require('express');
require("dotenv").config()
const port = process.env.PORT

// graphQL imports
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// create schema using graphQL schema
var helloSchema = buildSchema(`
  type Query {
    hello: String
  }
`);

// create root that provides a resolver func for each api request
var root = {
    hello: () => {
        return 'Hello World from GraphQL!!';
    }
}

var app = express();
// use graphQL HTTP
app.use('/graphql', graphqlHTTP({
    schema: helloSchema,
    rootValue: root,
    graphiql: true
}))

app.listen(port,console.log(`Running a GraphQL API server at ${port}/graphql`));
