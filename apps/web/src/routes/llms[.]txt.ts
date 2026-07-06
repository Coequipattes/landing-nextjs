import { createFileRoute } from "@tanstack/react-router";
import { servicePages } from "@/content/service-pages";
import { env } from "@/lib/env";

// /llms.txt — résumé structuré destiné aux crawlers IA (ChatGPT, Perplexity,
// Gemini…). Format Markdown conventionnel (llmstxt.org) : décrit l'entité, les
// services et les liens canoniques pour faciliter une citation exacte.
export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async () => {
        const baseUrl = env.siteUrl.replace(/\/$/, "");

        const serviceLinks = servicePages
          .map(
            (p) =>
              `- [${p.serviceSchema.name}](${baseUrl}/${p.slug}): ${p.metaDescription}`,
          )
          .join("\n");

        const text = `# Co'équi'pattes

> Garde d'animaux et cours d'équitation à Vannes (Morbihan, Bretagne). Manon Millot, monitrice d'équitation diplômée d'État et pet-sitter professionnelle assurée, membre de France Petsitters.

## À propos
- **Nom** : Co'équi'pattes (Manon Millot)
- **Activité** : pet-sitting (garde de chien, chat et NAC), promenades, pension privative, garde à domicile, cours d'équitation
- **Zone d'intervention** : Vannes et ~10 km alentour — Séné, Arradon, Saint-Avé, Theix-Noyalo, Ploeren, Plescop
- **Adresse** : 4 rue Tamara de Lempicka, 56000 Vannes, France
- **Téléphone** : +33 7 66 74 43 37
- **E-mail** : ${env.contactEmail}
- **Avis** : 5/5 sur Google (avis vérifiés)
- **Engagements** : pré-visite gratuite, compte-rendu photo à chaque garde, animaux jamais en cage, professionnelle diplômée et assurée

## Services
${serviceLinks}

## Liens
- [Accueil](${baseUrl})
- [Plan du site](${baseUrl}/sitemap.xml)
`;

        return new Response(text, {
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
      },
    },
  },
});
