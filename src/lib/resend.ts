import { Resend } from "resend";

let resend: Resend | null = null;

function getResend() {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

export async function sendContactEmail({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const to = process.env.CONTACT_EMAIL_TO || "coequipattes@gmail.com";

  return getResend().emails.send({
    from: "Co'équi'pattes <noreply@coequipattes.fr>",
    to,
    replyTo: email,
    subject: `[Co'équi'pattes] ${subject} — ${name}`,
    text: `Nouveau message de ${name} (${email})\n\nSujet : ${subject}\n\n${message}`,
  });
}
