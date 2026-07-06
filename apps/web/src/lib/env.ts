// Variables d'environnement publiques — safe côté client et serveur.
// Les vars VITE_* sont inlinées statiquement par Vite au build (client + serveur).

function required(name: string, value: string | undefined): string {
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export const env = {
  siteUrl: required("VITE_SITE_URL", import.meta.env.VITE_SITE_URL),
  contactEmail: required(
    "VITE_CONTACT_EMAIL",
    import.meta.env.VITE_CONTACT_EMAIL,
  ),
} as const;

export const displayUrl = env.siteUrl.replace(/^https?:\/\//, "");
