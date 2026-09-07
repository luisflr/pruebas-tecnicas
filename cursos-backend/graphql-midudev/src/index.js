import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { v1 as uuid } from 'uuid'

const persons = [
  {
    name: "Luis",
    phone: "123-456-678",
    street: "Calle test",
    city: "Arequipa",
    id: "123qwed-s2312-12312asd-qwe12312rs-123e"
  },
  {
    name: "Jose",
    phone: "987-654-321",
    street: "Calle street",
    city: "Lima",
    id: "123pe23-12p3d23-1p2o33-12p3oeq12304-984w"
  },
  {
    name: "Erick",
    phone: "567-123-898",
    street: "Calle join",
    city: "Ica",
    id: "2312qweop123-982345ieqw-12039perqw-983v"
  }
]

const typeDefs = `#graphql
  type Address {
    street: String!
    city: String!
  }

  type Person {
    name: String!
    phone: String
    address: Address!
    id: ID!
  }

  type Query {
    personCount: Int!
    allPersons: [Person]!
    findPerson(name: String!): Person!
  }

  type Mutation {
    addPerson(
      name: String!
      phone: String
      street: String!
      city: String!
    ): Person!
  }
`

const resolvers = {
  Query: {
    personCount: () => persons.length,
    allPersons: () => persons,
    findPerson: (root, args) => {
      const { name } = args
      return persons.find( person => person.name === name )
    }
  },
  Mutation: {
    addPerson: (root, args) => {
      const person = { ...args, id: uuid() }
      persons.push(person)
      return person
    }
  },
  Person: {
    address: (root) => {
      return { 
        street: root.street,
        city: root.city
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 8000 }
})

console.log(`Server is running at ${url}`)