// Zone d'intervention — source unique de vérité.
// Modifier ici se répercute partout : section « Zone d'intervention » des pages
// de service, frais kilométriques, et JSON-LD. Une page peut surcharger via son
// champ `area` optionnel (ex. équitation, dont la zone diffère).
export const COVERAGE = {
  city: "Vannes",
  radiusKm: 8,
  ratePerKm: "0,35 €/km",
  communes: ["Vannes", "Arradon", "Plescop", "Séné", "Saint-Avé", "Ploeren"],
};
