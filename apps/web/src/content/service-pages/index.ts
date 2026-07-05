import { equitationVannes } from "./equitation-vannes";
import { gardeADomicileVannes } from "./garde-a-domicile-vannes";
import { visitesChatVannes } from "./visites-chat-vannes";
import { visitesChienVannes } from "./visites-chien-vannes";
import { promeneurChienVannes } from "./promeneur-chien-vannes";
import type { ServicePageData } from "./types";

export const servicePages: ServicePageData[] = [
  visitesChienVannes,
  visitesChatVannes,
  promeneurChienVannes,
  equitationVannes,
  gardeADomicileVannes,
];

export function getServicePage(slug: string): ServicePageData | undefined {
  return servicePages.find((p) => p.slug === slug);
}

export type { ServicePageData };
