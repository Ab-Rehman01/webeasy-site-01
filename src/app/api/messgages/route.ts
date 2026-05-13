import { NextResponse } from "next/server";

export async function GET() {
  // 👉 Supabase se fetch karo
  // const { data } = await supabase.from("messages").select("*");

  return NextResponse.json({
    messages: [],
  });
}