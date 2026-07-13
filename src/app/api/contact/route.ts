import { NextResponse } from "next/server";
import { clinic } from "@/lib/data";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, email, service, message, website } = body as Record<
    string,
    string | undefined
  >;

  // Honeypot field — bots fill hidden fields, real users leave it blank.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !phone?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, phone, and message are required." },
      { status: 400 }
    );
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.error(
      "WEB3FORMS_ACCESS_KEY is not set. Get a free key at https://web3forms.com and add it to .env.local"
    );
    return NextResponse.json(
      {
        error:
          "The contact form isn't fully configured yet. Please call or WhatsApp us directly.",
      },
      { status: 503 }
    );
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New appointment enquiry — ${clinic.name}`,
        from_name: clinic.name,
        name,
        phone,
        email: email?.trim() || "Not provided",
        service: service || "Not specified",
        message,
      }),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data?.message || "Submission failed");
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call us directly." },
      { status: 502 }
    );
  }
}
