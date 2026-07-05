// Variables d'environnement serveur uniquement.
// Ne pas importer ce fichier dans des composants client.

function required(name: string, value: string | undefined): string {
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export const serverEnv = {
  // Envoi d'emails
  get contactEmailFrom() { return required("CONTACT_EMAIL_FROM", process.env.CONTACT_EMAIL_FROM); },
  get contactEmailTo() { return required("CONTACT_EMAIL_TO", process.env.CONTACT_EMAIL_TO); },
  get resendApiKey() { return required("RESEND_API_KEY", process.env.RESEND_API_KEY); },

  // Auth admin
  get adminEmail() { return required("ADMIN_EMAIL", process.env.ADMIN_EMAIL); },
  get adminPasswordHash() { return required("ADMIN_PASSWORD_HASH", process.env.ADMIN_PASSWORD_HASH); },
  get authSecret() { return required("AUTH_SECRET", process.env.AUTH_SECRET); },

  // Google Places
  get googlePlacesApiKey() { return required("GOOGLE_PLACES_API_KEY", process.env.GOOGLE_PLACES_API_KEY); },
  get googlePlaceId() { return required("GOOGLE_PLACE_ID", process.env.GOOGLE_PLACE_ID); },

  // Cron
  get cronSecret() { return required("CRON_SECRET", process.env.CRON_SECRET); },
};
