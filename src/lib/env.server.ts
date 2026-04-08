// Variables d'environnement serveur uniquement.
// Ne pas importer ce fichier dans des composants client.

function required(name: string, value: string | undefined): string {
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export const serverEnv = {
  // Envoi d'emails
  contactEmailTo: required("CONTACT_EMAIL_TO", process.env.CONTACT_EMAIL_TO),
  resendApiKey: required("RESEND_API_KEY", process.env.RESEND_API_KEY),

  // Auth admin
  adminEmail: required("ADMIN_EMAIL", process.env.ADMIN_EMAIL),
  adminPasswordHash: required(
    "ADMIN_PASSWORD_HASH",
    process.env.ADMIN_PASSWORD_HASH,
  ),
  authSecret: required("AUTH_SECRET", process.env.AUTH_SECRET),

  // Google Places
  googlePlacesApiKey: required(
    "GOOGLE_PLACES_API_KEY",
    process.env.GOOGLE_PLACES_API_KEY,
  ),
  googlePlaceId: required("GOOGLE_PLACE_ID", process.env.GOOGLE_PLACE_ID),

  // Cron
  cronSecret: required("CRON_SECRET", process.env.CRON_SECRET),
} as const;
