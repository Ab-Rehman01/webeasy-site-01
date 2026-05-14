import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET() {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    return NextResponse.json({ messages: [] });
  }

  return NextResponse.json({ messages: data });
}

// import { NextResponse } from "next/server";
// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

// export async function GET() {
//   try {
//     const { data, error } = await supabase
//       .from("messages")
//       .select("*")
//       .order("created_at", { ascending: true });

//     if (error) {
//       console.error(error);

//       return NextResponse.json({
//         messages: [],
//       });
//     }

//     return NextResponse.json({
//       messages: data,
//     });
//   } catch (err) {
//     console.error(err);

//     return NextResponse.json({
//       messages: [],
//     });
//   }
// }

// import { NextResponse } from "next/server";

// export async function GET() {
//   // 👉 Supabase se fetch karo
//   // const { data } = await supabase.from("messages").select("*");

//   return NextResponse.json({
//     messages: [],
//   });
// }