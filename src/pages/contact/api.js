import nodemailer from "nodemailer";

export async function POST({ request }) {
  const { name, email, message, token } = await request.json();

  const verify = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET,
        response: token,
      }),
    }
  ).then((r) => r.json());

  if (!verify.success) return new Response("Captcha failed", { status: 403 });

  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Nexoscript Contact" <${process.env.SMTP_USER}>`,
    to: "business@eztxm.de.",
    subject: `Contact from ${name}`,
    text: `Email: ${email}\n\n${message}`,
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
