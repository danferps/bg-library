import { type BoardGame } from "@/models/BoardGames";

export const fetchBoardGames = async (): Promise<BoardGame[]> => {
  const response = await fetch("http://localhost:3000/api/board-games");
  const boardGames = await response.json();
  return boardGames.data;
};
