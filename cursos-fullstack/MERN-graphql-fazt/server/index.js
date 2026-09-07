
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './app-graphql/typedefs.js';
import { resolvers } from './app-graphql/resolvers.js'
import { startApolloServer } from './app.js';


startApolloServer(typeDefs, resolvers)