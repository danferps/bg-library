import { fetchBoardGames } from "@/app/api/service/boardGame.service";
import { Key } from "react";

const BoardGameList = async () => {
  const boardGames = await fetchBoardGames();
  return (
    <ul>
      {boardGames?.map((boardGame) => (
        <li key={boardGame._id as Key}>
          {boardGame.name}
          </li>
      ))}
    </ul>
  );
};

export default BoardGameList;
