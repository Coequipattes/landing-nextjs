import { equitationVannes } from "./equitation-vannes";
import { gardeChatVannes } from "./garde-chat-vannes";
import { gardeChienVannes } from "./garde-chien-vannes";
import { promeneurChienVannes } from "./promeneur-chien-vannes";
import type { ServicePageData } from "./types";

export const servicePages: ServicePageData[] = [
  gardeChienVannes,
  gardeChatVannes,
  promeneurChienVannes,
  equitationVannes,
];

export function getServicePage(slug: string): ServicePageData | undefined {
  return servicePages.find((p) => p.slug === slug);
}

export type { ServicePageData };
