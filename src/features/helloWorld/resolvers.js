const helloWorldResolvers = {
    Query: {
        myFirstEndpoint: async (_parent, _arguments, _context, _info) => {
            return "Hello from GraphQL, World!👋"
        }
    }
};

module.exports = helloWorldResolvers;
