const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID!
        userName: String!
        password: String!
        email: String!
        trade: [Trade]
        wish: [Wish]
    }

    type Trade{
        _id: ID
        plantId: String!,
        plantImage: String!,
        plantName: String!,
    
    }

    type Wish{
        _id: ID
        plantId: String!,
        plantImage: String!,
        plantName: String!,
    }

    type Auth {
        token: ID
        user: User
    }    
    
    input TradeInput {
        plantId: String!,
        plantImage: String!,
        plantName: String!,
    }

    input WishInput {
        plantId: String!,
        plantImage: String!,
        plantName: String!,
    }

    type Query {
        users: [User]
        me: User
        connectWishTrade: [User]
    }

    type Mutation {
        addUser(userName: String!,email: String!,password: String!): Auth 
        login(email: String!, password: String!): Auth
        addWish(wishData: WishInput): Wish
        addTrade(tradeData: TradeInput): Trade
        removeTrade(plantId: String!): User
        removeWish(plantId: String!): User
    }

`;

module.exports = typeDefs;