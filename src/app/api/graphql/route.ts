import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import typeDefs from "./board-games/schema";
import resolvers from "./board-games/resolver";
import BoardGameDataSource from "./board-games/datasource";
import BoardGames from "../models/BoardGames";
import { ApoloAppContext, DataSources } from "./context";

const createDataSources = (): DataSources => ({
  boardGames: new BoardGameDataSource({ modelOrCollection: BoardGames }),
});

const server = new ApolloServer<ApoloAppContext>({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest, ApoloAppContext>(
  server,
  {
    context: async (req, res) => ({
      req,
      res,
      dataSources: createDataSources(),
    }),
  }
);

export const GET = async (request: NextRequest) => {
  return handler(request);
};

export const POST = async (request: NextRequest) => {
  return handler(request);
};
