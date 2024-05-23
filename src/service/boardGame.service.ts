import { type BoardGameDocument } from "@/app/api/models/BoardGames";
import { unstable_noStore as noStore } from "next/cache";

export const fetchBoardGames = async (): Promise<BoardGameDocument[]> => {
  noStore();
  const boardGamesQuery = `#graphql
  query Query {
    boardGames {
      _id
      name
      image
    }
  }`;

  const body = JSON.stringify({
    query: boardGamesQuery,
  });
  const response = await fetch("http://localhost:3000/api/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body,
  });
  const jsonData = await response.json();
  return jsonData.data.boardGames;
};
