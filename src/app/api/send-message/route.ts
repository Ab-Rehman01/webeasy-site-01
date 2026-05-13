import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch(
      `https://graph.facebook.com/v25.0/1095382826995437/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `EAAV18Sy2fBoBRa8EMasirPVQyDNRPWLenzqDwCmvkYYq89pkEtVsdFg35cBzVYPE3xCWaalZBkt43UkGZBxFH6UiXb0ZBS7wQoassWJLfQ2lc1jKIUOYv4g4B7n19cOIbmEmNY1ARfIBc2vXoDBwU3NvE0c6DwlyfLhy3cFlyTNgHabcKpoH85524eVLSvFACZCsZB59a3xlfYf3gAsvNDwd4zyIEIfIyUtWp4A5wmL2Qurzq9tWYquJLpo0KLgcCEiTgpQm3cO6Ruq8PgV1Ix9oj`,
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