export interface PropertyType {
  id: string;
  name: string;
  listings: number;
  active: boolean;
}

export interface Amenity {
  id: string;
  name: string;
  listings: number;
  active: boolean;
}

export interface Barangay {
  id: string;
  name: string;
  listings: number;
}

export interface CityLocation {
  id: string;
  name: string;
  listings: number;
  barangays: Barangay[];
}

export const propertyTypes: PropertyType[] = [
  { id: "PT-1", name: "Apartment", listings: 412, active: true },
  { id: "PT-2", name: "Condominium", listings: 356, active: true },
  { id: "PT-3", name: "House and Lot", listings: 284, active: true },
  { id: "PT-4", name: "Townhouse", listings: 118, active: true },
  { id: "PT-5", name: "Boarding House", listings: 74, active: true },
  { id: "PT-6", name: "Commercial Space", listings: 40, active: true },
  { id: "PT-7", name: "Warehouse", listings: 0, active: false },
];

export const amenities: Amenity[] = [
  { id: "AM-1", name: "Parking", listings: 892, active: true },
  { id: "AM-2", name: "Air Conditioning", listings: 764, active: true },
  { id: "AM-3", name: "Furnished", listings: 601, active: true },
  { id: "AM-4", name: "Pet Friendly", listings: 318, active: true },
  { id: "AM-5", name: "Swimming Pool", listings: 96, active: true },
  { id: "AM-6", name: "Gym", listings: 82, active: true },
  { id: "AM-7", name: "CCTV Security", listings: 540, active: true },
  { id: "AM-8", name: "Balcony", listings: 0, active: false },
];

export const cityLocations: CityLocation[] = [
  {
    id: "CT-1",
    name: "Davao City",
    listings: 1180,
    barangays: [
      { id: "BR-1", name: "Matina", listings: 214 },
      { id: "BR-2", name: "Buhangin", listings: 186 },
      { id: "BR-3", name: "Bajada", listings: 142 },
      { id: "BR-4", name: "Poblacion", listings: 128 },
      { id: "BR-5", name: "Talomo", listings: 110 },
      { id: "BR-6", name: "Ecoland", listings: 96 },
    ],
  },
  {
    id: "CT-2",
    name: "Panabo City",
    listings: 64,
    barangays: [
      { id: "BR-7", name: "San Vicente", listings: 22 },
      { id: "BR-8", name: "Gredu", listings: 18 },
    ],
  },
  {
    id: "CT-3",
    name: "Tagum City",
    listings: 40,
    barangays: [
      { id: "BR-9", name: "Magugpo Poblacion", listings: 26 },
      { id: "BR-10", name: "Apokon", listings: 14 },
    ],
  },
];
