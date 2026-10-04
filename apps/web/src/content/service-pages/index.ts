import { equitationVannes } from "./equitation-vannes";
import { gardeADomicileVannes } from "./garde-a-domicile-vannes";
import { hebergementChatVannes } from "./hebergement-chat-vannes";
import { promenadeChienVannes } from "./promenade-chien-vannes";
import type { ServicePageData } from "./types";
import { visitesChatVannes } from "./visites-chat-vannes";
import { visitesChienVannes } from "./visites-chien-vannes";

export const servicePages: ServicePageData[] = [
  visitesChienVannes,
  visitesChatVannes,
  promenadeChienVannes,
  hebergementChatVannes,
  equitationVannes,
  gardeADomicileVannes,
];

export function getServicePage(slug: string): ServicePageData | undefined {
  return servicePages.find((p) => p.slug === slug);
}

export type { ServicePageData };
