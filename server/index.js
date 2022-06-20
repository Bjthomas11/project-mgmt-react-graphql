var express = require("express");
require("dotenv").config();
const colors = require("colors");
const cors = require("cors");
const port = process.env.PORT;
const schema = require("./schema/schema");

const connectDB = require("./config/db");

// GraphQL imports
const { graphqlHTTP } = require("express-graphql");
var app = express();

// connect to DB
connectDB();

// CORS
app.use(cors());

// use graphQL HTTP
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development"
  })
);

app.listen(
  port,
  console.log(`Running a GraphQL API server at ${port}/graphql`)
);
