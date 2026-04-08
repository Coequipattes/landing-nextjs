import { Resend } from "resend";
import { serverEnv } from "./env.server";

let resend: Resend | null = null;

function getResend() {
  if (!resend) {
    resend = new Resend(serverEnv.resendApiKey);
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
  return getResend().emails.send({
    from: "Co'équi'pattes <noreply@coequipattes.fr>",
    to: serverEnv.contactEmailTo,
    replyTo: email,
    subject: `[Co'équi'pattes] ${subject} — ${name}`,
    text: `Nouveau message de ${name} (${email})\n\nSujet : ${subject}\n\n${message}`,
  });
}
