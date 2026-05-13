import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch(
      `https://graph.facebook.com/v25.0/1095382826995437/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer EAAV18Sy2fBoBRdFBWqQGiIlR1ZCnWAbRKLCXogQhl8LX8eF42WRmZB1XKerYU1nZAeyNYvLMZCbjfIdhxTkzhI2qFZAhBn3WaZBZAaCiDuWlLsQ2cd8TOejZCiUpIfSZCN3QOvK79A6tfZAIpmXG3iaduvchKt7nVWFF6MBzX5qhw7vhJSIGuzZCXCqIZAmB5rNnYM8S6OwKlZB85XCZCYnigNqiqqpE7ZCq7YCde0ZCJVc8xFKvbR699zZCDdZBcKgbqmAW5kcWs8XShHLhRJ0mndXCFmDGLswwZDZD`,
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

    if (!response.ok) {
      return NextResponse.json({
        success: false,
        error: data,
      });
    }

    return NextResponse.json({
      success: true,
      data,
      message: "Message Sent Successfully",
    });
  } catch (error) {
    console.error("Something went wrong:", error);

    return NextResponse.json({
      success: false,
      error: "Internal server error",
    });
  }
}