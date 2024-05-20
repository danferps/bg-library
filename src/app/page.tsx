import { fetchBoardGames } from "@/service/boardGame.service";
import BoardGameList from "@/ui/home/BoardGameList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Board Game Library",
    default: "Board Game Library",
  },
  description:
    "Project to create and customize your virtual Board game library, add your games and share them with other people",
};

export default async function Home() {
  const boardGames = await fetchBoardGames();

  return (
    <main>
      <header>
        <h1>Board Game Library</h1>
        <BoardGameList boardGames={boardGames} />
      </header>
    </main>
  );
}
