import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from './schema.js'

const server = new ApolloServer({ typeDefs, resolvers });

export default server;
