import { type BoardGameDocument } from "@/app/api/models/BoardGames";

export const fetchBoardGames = async (): Promise<
  BoardGameDocument[] | null
> => {
  const boardGamesQuery = `#graphql
  query Query {
    boardGames {
      _id
      name
    }
  }`;

  try {
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
  } catch (error) {
    return null;
  }
};
