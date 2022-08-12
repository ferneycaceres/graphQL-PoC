const { ApolloServer, gql } = require('apollo-server');
// The GraphQL schema
const typeDefs = gql`
  type Query {
    hola: String!
    holaConNombre(nombre:String!): String
    holaAlCursoGraphQL: String!
  }
`;

const resolvers = {
  Query: {
    hola: ()=>  { return 'Hola mundo!' },
    holaConNombre : (root,args,context) =>{ return `Hola mundo ${args.nombre}`},
    holaAlCursoGraphQL: ()=>  { return 'Hola Mundo en el curso de GraphQL' },
  },
};


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = 5300;

server.listen(
    { port : PORT},
    () => console.log(`Hola Mundo API GraphQL http://localhost:${PORT}/graphql`)
);