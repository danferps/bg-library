import mongoose from "mongoose";

export interface BoardGame extends mongoose.Document {
  name: string;
  description: string;
  play_time: number;
  age_rating: number;
  min_players: number;
  max_players: number;
  categories: string[];
  mechanics: string[];
  publisher: string;
}

const BoardGameSchema = new mongoose.Schema<BoardGame>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    publisher: { type: String, required: true },
    min_players: { type: Number, required: true },
    max_players: { type: Number, required: true },
    play_time: { type: Number, required: true },
    age_rating: { type: Number, required: true },
    categories: { type: [String], required: true },
    mechanics: { type: [String], required: true },
  },
  { timestamps: true }
);

export default mongoose.models.BoardGames ||
  mongoose.model<BoardGame>("BoardGames", BoardGameSchema);
