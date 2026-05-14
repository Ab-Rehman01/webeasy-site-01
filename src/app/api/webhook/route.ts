// import { NextRequest, NextResponse } from "next/server";
// import { createClient } from "@supabase/supabase-js";

// const VERIFY_TOKEN = "webezee_verify_token";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

/* =======================
   GET (Meta Verification)
======================= */
// export async function GET(req: NextRequest) {
//   const url = new URL(req.url);

//   const mode = url.searchParams.get("hub.mode");
//   const token = url.searchParams.get("hub.verify_token");
//   const challenge = url.searchParams.get("hub.challenge");

//   console.log("GET WEBHOOK HIT");
//   console.log("MODE:", mode);
//   console.log("TOKEN:", token);
//   console.log("EXPECTED:", VERIFY_TOKEN);

//   if (mode === "subscribe" && token === VERIFY_TOKEN) {
//     return new NextResponse(challenge || "", {
//       status: 200,
//       headers: { "Content-Type": "text/plain" },
//     });
//   }

//   return new NextResponse("Forbidden", { status: 403 });
// }
/* =======================
   POST (Incoming Messages)
======================= */
// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();

//     console.log("🔥 WEBHOOK POST HIT");
//     console.log(JSON.stringify(body, null, 2));

//     const message =
//       body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];

//     if (!message) {
//       return NextResponse.json({ success: true });
//     }

//     const from = message.from;
//     const text = message.text?.body || "";

//     const { error } = await supabase.from("messages").insert([
//       {
//         contact_phone: from,
//         message: text,
//         direction: "inbound",
//       },
//     ]);

//     if (error) {
//       console.error("SUPABASE ERROR:", error);
//     }

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("WEBHOOK ERROR:", error);

//     return NextResponse.json(
//       { success: false },
//       { status: 200 }
//     );
//   }
// }

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();

//     console.log("🔥 POST WEBHOOK HIT");
//     console.log(JSON.stringify(body, null, 2));

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.log("❌ POST ERROR:", error);

//     return NextResponse.json({ success: false });
//   }
// }

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");

  const VERIFY_TOKEN = "webezee_verify_token";

  console.log("GET WEBHOOK HIT");

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    return new NextResponse(challenge || "", {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  }

  return new NextResponse("Forbidden", { status: 403 });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log("🔥 POST WEBHOOK HIT");
    console.log(JSON.stringify(body, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("❌ POST ERROR:", error);

    return NextResponse.json({ success: false });
  }
}