import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch(
      `https://graph.facebook.com/v25.0/1095382826995437/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `EAAV18Sy2fBoBRV33U1KvoYZAbgKC3aPuV6pKgi0DDoZBxMyReZCZC9qRCig98VNSafOdTZBgsBbZAsCspd9xZAJZBIdorclswOVviahZAdxUD9DZCrU6tatHlzquCZA3ByMKS6iWLXOcotbh0mDjAzzOW7VdDkDiXgGFQEOnZCJJZAK1u5egJZB6RDDQMZBkZA9XchfpzAWqChCbhl5aRkWdslHeLczMfvjBsZBcZBKR4tKEn97PWWr2ZBC9ZCC5pCiPQDCDZA8u2CZC36ZComBLbxKKCEIZAVpaSj8aOQZDZD`,
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