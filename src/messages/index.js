import { gql } from "apollo-server";
import Message from "../models/message.js";

export const typeDefs = gql`
  type Message {
    _id: ID
    title: String
    content: String
    author: String
  }

  extend type Query {
    messages: [Message] 
    message(_id: ID): Message 
  }

  type Mutation {
    createMessage(title: String, content: String, author: String): Message
    updateMessage(_id: ID title: String, content: String, author: String): Message
    deleteMessage(_id: ID): Message
  }
`;

export const resolvers = {
  Query: {
    messages: async() => await Message.find(),
    message: async (_, { _id }) => await Message.findById(_id),
  },
    Mutation: {
        createMessage: async (_, args) => {
            const newMessage = new Message(args)
            return await newMessage.save();
        },
        updateMessage: async (_, {_id, title, content, author}) => {
            return await Message.findByIdAndUpdate(
                _id,
                {title, content, author},
                {new: true}
            )
        },
        deleteMessage: async(_, {_id}) =>  await Message.findByIdAndDelete(_id)
    }
};
