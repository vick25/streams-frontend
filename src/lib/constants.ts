import type { MapFeature, StatItem } from "./types";

// Helper to generate random points around a center
const generatePoints = (
  baseId: string,
  centerLat: number,
  centerLng: number,
  count: number,
  locationName: string
): MapFeature[] => {
  return Array.from({ length: count }).map((_, i) => {
    // Random offset ~ +/- 0.75 degrees for broader distribution
    const latOffset = (Math.random() - 0.5) * 1.5;
    const lngOffset = (Math.random() - 0.5) * 1.5;

    const types: MapFeature["type"][] = [
      "Bassin de retention",
      "Barrage",
      "Citerne ou Réservoir",
      "Couverture végétale",
      "Déversoir",
      "Puits",
    ];
    const type = types[Math.floor(Math.random() * types.length)];

    const _states: MapFeature["state"][] = [
      "Functional",
      "Needs Repair",
      "Critical",
    ];
    // Weighted random for state (more Functional)
    const stateRand = Math.random();
    let state: MapFeature["state"] = "Functional";
    if (stateRand > 0.7) state = "Needs Repair";
    if (stateRand > 0.9) state = "Critical";

    return {
      id: `${baseId}-${i}`,
      lat: centerLat + latOffset,
      lng: centerLng + lngOffset,
      type,
      location: `${locationName} - Sector ${i + 1}`,
      state,
      // Generate a realistic random date between 2020-2025
      lastVerification: (() => {
        const year = 2020 + Math.floor(Math.random() * 6); // 2020..2025
        const month = String(1 + Math.floor(Math.random() * 12)).padStart(
          2,
          "0"
        );
        const day = String(1 + Math.floor(Math.random() * 28)).padStart(2, "0");
        return `${year}-${month}-${day}`;
      })(),
      fundingPartner: [
        "UNICEF",
        "World Bank",
        "USAID",
        "EU Development Fund",
        "Red Cross",
      ][Math.floor(Math.random() * 5)],
      waterVolume: Math.floor(Math.random() * 100),
      maxCapacity: 100 + Math.floor(Math.random() * 100),
    };
  });
};

// Significantly increased point counts
const KINSHASA_POINTS = generatePoints("kin", -4.4419, 15.2663, 15, "Kinshasa");
const MBANDAKA_POINTS = generatePoints("mba", 0.0485, 18.2603, 6, "Mbandaka");
const LUBUMBASHI_POINTS = generatePoints(
  "lub",
  -11.6609,
  27.4794,
  10,
  "Lubumbashi"
);
const GOMA_POINTS = generatePoints("gom", -1.6585, 29.2205, 20, "Goma");
const KISANGANI_POINTS = generatePoints("kis", 0.5153, 25.191, 2, "Kisangani");
const KANANGA_POINTS = generatePoints("kan", -5.8907, 22.4178, 6, "Kananga");

export const MOCK_FEATURES: MapFeature[] = [
  ...KINSHASA_POINTS,
  ...MBANDAKA_POINTS,
  ...LUBUMBASHI_POINTS,
  ...GOMA_POINTS,
  ...KISANGANI_POINTS,
  ...KANANGA_POINTS,
];

export const CATEGORIES = [
  "All Categories",
  "Bassin de retention",
  "Barrage",
  "Citerne ou Réservoir",
  "Couverture végétale",
  "Déversoir",
  "Puits",
];

export const STATS: StatItem[] = [
  { value: "50K+", label: "Personnes actives" },
  { value: "2M+", label: "Infrastructures" },
  { value: "150+", label: "Quartier" },
  { value: "99.9%", label: "Status" },
];

// Mock database values for location dropdowns
export const LOCATION_DATA = {
  communes: [
    "Bandalungwa",
    "Barumbu",
    "Bumbu",
    "Gombe",
    "Kalamu",
    "Kasa-Vubu",
    "Kimbanseke",
    "Kinshasa",
    "Kintambo",
    "Kisenso",
    "Lemba",
    "Limete",
    "Lingwala",
    "Makala",
    "Maluku",
    "Masina",
    "Matete",
    "Mont-Ngafula",
    "Ndjili",
    "Ngaba",
    "Ngaliema",
    "Ngiri-Ngiri",
    "Nsele",
    "Selembao",
  ].sort(),
  quartiers: [
    "Binza Ozone",
    "Binza Pigeon",
    "Cité Verte",
    "GB",
    "Industriel",
    "Kimbondo",
    "Kingabwa",
    "Lemba Super",
    "Mama Yemo",
    "Matonge",
    "Mimosas",
    "Mososo",
    "Righini",
    "Salongo",
    "Socimat",
    "Utexafrica",
    "Virunga",
  ].sort(),
  avenues: [
    "Avenue de la Liberation",
    "Avenue des Huileries",
    "Avenue Kasa-Vubu",
    "Avenue Lumumba",
    "Avenue Mulamba",
    "Avenue Nguma",
    "Avenue Poids Lourds",
    "Boulevard du 30 Juin",
    "Boulevard Triomphal",
    "Route By Pass",
    "Route de Matadi",
  ].sort(),
};
