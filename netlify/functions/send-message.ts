import type { Handler } from "@netlify/functions";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method Not Allowed" }) };
  }

  let payload: ContactPayload;
  try {
    payload = JSON.parse(event.body ?? "{}") as ContactPayload;
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON body" }) };
  }

  const { name, email, company, message } = payload;
  if (!name || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing required fields" }) };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !toEmail) {
    return { statusCode: 500, body: JSON.stringify({ error: "Email service is not configured" }) };
  }

  const bodyLines = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    "",
    message,
  ].filter((line): line is string => line !== null);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Mitzora website <onboarding@resend.dev>",
      to: toEmail,
      reply_to: email,
      subject: `Mitzora inquiry from ${name}`,
      text: bodyLines.join("\n"),
    }),
  });

  if (!res.ok) {
    return { statusCode: 502, body: JSON.stringify({ error: "Failed to send message" }) };
  }

  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
};
