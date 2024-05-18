import dbConnect from "@/app/api/service/connectDB";
import BoardGames from "@/models/BoardGames";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET(_: NextRequest) {
  await dbConnect();
  try {
    const boardGames = await BoardGames.find({});
    return NextResponse.json({ success: true, data: boardGames });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  } finally {
    await mongoose.connection.close();
  }
}
