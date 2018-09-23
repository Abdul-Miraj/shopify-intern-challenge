import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import schema from './graphql/index';

const app = express();

if (process.env.NODE_ENV !== 'production') {
  dotenv.load();
}

const server = new ApolloServer({schema});
server.applyMiddleware({app});

export default app;
