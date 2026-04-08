// Variables d'environnement publiques — safe côté client et serveur.
// Les vars NEXT_PUBLIC_* sont inlinées statiquement par Next.js au build.

function required(name: string, value: string | undefined): string {
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export const env = {
  siteUrl: required(
    "NEXT_PUBLIC_SITE_URL",
    process.env.NEXT_PUBLIC_SITE_URL,
  ),
  contactEmail: required(
    "NEXT_PUBLIC_CONTACT_EMAIL",
    process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  ),
} as const;

export const displayUrl = env.siteUrl.replace(/^https?:\/\//, "");
