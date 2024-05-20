import BoardGames, { BoardGameDocument } from "@/app/api/models/BoardGames";
import { MongoDataSource } from "apollo-datasource-mongodb";

export default class BoardGameDataSource extends MongoDataSource<BoardGameDocument> {
  getAllBoardGames = async () => {
    try {
      const boardGames = await BoardGames.find({});
      return boardGames;
    } catch (error) {
      return new Error("Failed to fetch board games in datasource");
    }
  };
}
