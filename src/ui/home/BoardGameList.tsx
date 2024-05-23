"use client";

import { BoardGameDocument } from "@/app/api/models/BoardGames";
import { fetchBoardGames } from "@/service/boardGame.service";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Key } from "react";

type BoardGameListProps = {
  boardGames: BoardGameDocument[];
};

const BoardGameList = ({ boardGames }: BoardGameListProps) => {
  const { data } = useQuery({
    queryKey: ["boardGames"],
    queryFn: fetchBoardGames,
    initialData: boardGames,
  });

  return (
    <ul>
      {data?.map((boardGame) => {
        return (
          <li key={boardGame._id as unknown as Key}>
            <h2>{boardGame.name}</h2>
            <Image
              src={boardGame.image}
              alt={`Image of ${boardGame.name}`}
              width={121}
              height={150}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default BoardGameList;
