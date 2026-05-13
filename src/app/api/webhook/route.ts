import { NextRequest, NextResponse } from "next/server";

const VERIFY_TOKEN = "webezee_verify_token";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;

  const mode = params.get("hub.mode");
  const token = params.get("hub.verify_token");
  const challenge = params.get("hub.challenge");

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    return new NextResponse(challenge, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  }

  return NextResponse.json({ success: false }, { status: 403 });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const message =
      body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];

    if (message) {
      const from = message.from;
      const text = message.text?.body;

      console.log("Incoming:", from, text);

      // 👉 HERE SAVE TO DB (Supabase)
      // await supabase.from("messages").insert({
      //   phone: from,
      //   message: text,
      //   direction: "inbound",
      // });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error);

    return NextResponse.json({ success: false });
  }
}