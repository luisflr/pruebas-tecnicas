import express from 'express'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import cors from 'cors'
import http from 'http'

export const startApolloServer = async (typeDefs, resolvers) => {
  const app = express()
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers
  })

  await server.start()
  
  app.use(cors())
  app.use(express.json())

  app.get('/', (req, res) => {
    res.send('<h3>Hello world</h3>')
  })

  app.use('/graphql', expressMiddleware(server))

  await new Promise(resolve => httpServer.listen({
    port: 8000
  }, resolve))

  console.log(`🚀 Server ready at http://localhost:8000/`)
}

