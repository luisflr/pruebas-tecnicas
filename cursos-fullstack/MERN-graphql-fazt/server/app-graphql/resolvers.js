import { books } from '../utils/constants.js'
export const resolvers = {
  Query: {
    books: () => books,
  },
};