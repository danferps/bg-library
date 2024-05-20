import boardGameResolvers from "./board-games/resolver";

const resolvers = {
  Query: {
    ...boardGameResolvers.Query,
  },
};

export default resolvers;
