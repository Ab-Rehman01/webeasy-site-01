import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch(
      `https://graph.facebook.com/v25.0/1095382826995437/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `EAAV18Sy2fBoBRcpYqQbwAWsWHvXYjIKwDZCWhWqaacI2yQmXOaZBHEEzihjpf8PxN4fgGbsqZBPy3DZAbH2HaEDl0yjsin9Vku95cIdetwTilUZAi4BxOM0ySwZA7fiPNaBzZBdS8gyWrZAioYBHDiDwXk3STltqODRmoATW1GKFq8qdfmqQabEmRTKF9LilPZBQKID88TeEpZBgx061eZBzYzKxUUTD7ZBevZCMoExKzJ8ltqc0LC8RbZA7MyT8IRJvR1keMpIZBlrXRddfhPKZCeAjaHPGPcEZD`,
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