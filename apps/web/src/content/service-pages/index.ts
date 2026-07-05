import { equitationVannes } from "./equitation-vannes";
import { gardeADomicileVannes } from "./garde-a-domicile-vannes";
import { hebergementChatVannes } from "./hebergement-chat-vannes";
import { hebergementChienVannes } from "./hebergement-chien-vannes";
import { visitesChatVannes } from "./visites-chat-vannes";
import { visitesChienVannes } from "./visites-chien-vannes";
import { promenadeChienVannes } from "./promenade-chien-vannes";
import type { ServicePageData } from "./types";

export const servicePages: ServicePageData[] = [
  visitesChienVannes,
  visitesChatVannes,
  promenadeChienVannes,
  hebergementChienVannes,
  hebergementChatVannes,
  equitationVannes,
  gardeADomicileVannes,
];

export function getServicePage(slug: string): ServicePageData | undefined {
  return servicePages.find((p) => p.slug === slug);
}

export type { ServicePageData };
