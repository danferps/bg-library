const boardGameResolvers = {
  Query: {
    boardGames: async (
      _: any,
      __: any,
      context: { dataSources: { boardGames: { getAllBoardGames: () => any } } }
    ) => {
      try {
        const data = await context.dataSources.boardGames.getAllBoardGames();
        return data 
      } catch (error) {
        throw new Error("Failed to fetch board games");
      }
    },
  }
};

export default boardGameResolvers;
