const query = {
    Query: {
        hola: () => { return 'Hola mundo!' },
        holaConNombre: (root :any, args: any, context: any) => { return `Hola mundo ${args.nombre}` },
        holaAlCursoGraphQL: () => { return 'Hola Mundo en el curso de GraphQL' },
    },
};

export default query;