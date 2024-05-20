"use client";

import { BoardGameDocument } from "@/app/api/models/BoardGames";
import { fetchBoardGames } from "@/service/boardGame.service";
import { useQuery } from "@tanstack/react-query";
import { Key } from "react";

type BoardGameListProps = {
  boardGames: BoardGameDocument[];
};

const BoardGameList = ({ boardGames }: BoardGameListProps) => {
  const { data } = useQuery({
    queryKey: ["boardGames"],
    queryFn: fetchBoardGames,
    initialData: boardGames,
    enabled: false
  });

  return (
    <ul>
      {data?.map((boardGame) => (
        <li key={boardGame._id as unknown as Key}>{boardGame.name}</li>
      ))}
    </ul>
  );
};

export default BoardGameList;
