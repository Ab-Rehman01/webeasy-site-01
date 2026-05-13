import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch(
      `https://graph.facebook.com/v25.0/1095382826995437/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `EAAV18Sy2fBoBRTLCzG96MV9XgZAjPkBpnxXsCI0ncIAKmZAyFyp0QjRKUvSSvFlFTQCuwr8iptZCJOx4qumruZCVIUiLSlElWmVdALJoZBQmMaYkof4FnVY1mBeFBwM8RNiyo8yhbxH4BIupPQjbzK6SgbZAKXfa12vZCr5J4I3ZCODyTLsa9L1gmI5GMwhStknGCmrn7xj4Kdk57xZAKpvDOr9myZCXEsMZBizc3ZBpyoQxayfGBke5eTEAPqYJTbP1sdh2ZBXerKwuaKTo0YoFYkEGdUCUZD`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: body.to,
          type: "text",
          text: {
            body: body.message,
          },
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json({
      success: true,
      data,
      message: "Message Sent Successfully",
    });
  } catch (error) {
  console.error("Something went wrong:", error);
}
}