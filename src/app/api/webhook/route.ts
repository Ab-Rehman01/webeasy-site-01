import { NextRequest, NextResponse } from "next/server";

const VERIFY_TOKEN = "webezee_verify_token";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    return new NextResponse(challenge, { status: 200 });
  }

  return NextResponse.json(
    { success: false },
    { status: 403 }
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log(
      "Webhook Data:",
      JSON.stringify(body, null, 2)
    );

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
  console.error("Webhook failed:", error);
}
}