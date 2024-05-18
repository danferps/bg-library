import BoardGameDataSource from "./board-games/datasource";

export interface DataSources {
  boardGames: BoardGameDataSource;
}

export interface ApoloAppContext {
  dataSources: DataSources;
  req: any;
  res: any;
}
