import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, quantity, product, message } = body;

    if (!name || !company || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const payload = {
      name,
      company,
      email,
      phone,
      quantity,
      product,
      message,
      timestamp: new Date().toISOString(),
    };

    console.log("Quote request received:", payload);

    return NextResponse.json(
      { success: true, message: "Quote request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Quote request error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
