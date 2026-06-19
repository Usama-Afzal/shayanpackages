import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const fullName = formData.get("fullName");
    const companyName = formData.get("companyName");
    const whatsapp = formData.get("whatsapp");
    const industry = formData.get("industry");
    const bagTypes = formData.getAll("bagTypes");
    const additionalInfo = formData.get("additionalInfo");

    if (!fullName || !companyName || !whatsapp || !industry) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const payload = {
      fullName,
      companyName,
      whatsapp,
      industry,
      bagTypes,
      additionalInfo,
      timestamp: new Date().toISOString(),
    };

    console.log("Sample request received:", payload);

    return NextResponse.json(
      { success: true, message: "Sample request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Sample request error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
