import { fetchBoardGames } from "@/service/boardGame.service";
import { Key } from "react";

const BoardGameList = async () => {
  const boardGames = await fetchBoardGames();
  return (
    <ul>
      {boardGames?.map((boardGame) => (
        <li key={boardGame._id as unknown as Key}>{boardGame.name}</li>
      ))}
    </ul>
  );
};

export default BoardGameList;
