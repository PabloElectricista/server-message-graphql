import { gql } from "apollo-server";
import { typeDefs as Messages, resolvers as MessageResolvers } from '../messages/index.js'

const rootTypedefs = gql`
    type Query {
        test: String
    }
`

const rootResolver = {
    Query: {
        test: () => "ok"
    }
}

export const resolvers = [rootResolver, MessageResolvers]

export const typeDefs = [rootTypedefs, Messages]