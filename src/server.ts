import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers/resolversMap';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = 5300;

server.listen(
    { port : PORT},
    () => console.log(`Hola Mundo API GraphQL http://localhost:${PORT}/graphql`)
);