export type ListingQueueStatus = "Pending" | "Active" | "Flagged" | "Suspended" | "Rejected";

export interface QueuedListing {
  id: string;
  property: string;
  location: string;
  price: number;
  status: ListingQueueStatus;
  agent: string;
  createdAt: string;
  reason?: string;
}

export const listingStatCards = [
  { label: "Pending Review", value: "42", caption: "9 submitted today" },
  { label: "Approved Today", value: "16", caption: "vs 11 yesterday" },
  { label: "Flagged", value: "7", caption: "3 need urgent review" },
  { label: "Active Listings", value: "1,284", caption: "48 added this month" },
];

export const listingQueue: QueuedListing[] = [
  { id: "L-1046", property: "2BR Condo Unit, Azalea Towers", location: "Matina, Davao City", price: 18500, status: "Pending", agent: "Maria Santos", createdAt: "2026-07-02" },
  { id: "L-1045", property: "Studio Unit, One Wilson Place", location: "Bajada, Davao City", price: 12000, status: "Pending", agent: "Jerome Villaflor", createdAt: "2026-07-01" },
  { id: "L-1044", property: "3BR House and Lot", location: "Buhangin, Davao City", price: 25000, status: "Flagged", agent: "Anna Reyes", createdAt: "2026-07-01", reason: "Price significantly below market average" },
  { id: "L-1043", property: "Commercial Space, Roxas Ave", location: "Poblacion, Davao City", price: 45000, status: "Active", agent: "Carlo Dizon", createdAt: "2026-06-30" },
  { id: "L-1042", property: "1BR Apartment, Talomo Heights", location: "Talomo, Davao City", price: 9500, status: "Active", agent: "Maria Santos", createdAt: "2026-06-29" },
  { id: "L-1041", property: "4BR House, Bangkal Village", location: "Bangkal, Davao City", price: 32000, status: "Suspended", agent: "Jerome Villaflor", createdAt: "2026-06-28", reason: "Duplicate listing reported by renter" },
  { id: "L-1040", property: "2BR Townhouse, Ecoland", location: "Ecoland, Davao City", price: 21000, status: "Rejected", agent: "Bea Fernandez", createdAt: "2026-06-27", reason: "Incomplete property documents" },
  { id: "L-1039", property: "Boarding House, Ulas", location: "Ulas, Davao City", price: 4500, status: "Pending", agent: "Anna Reyes", createdAt: "2026-06-27" },
];
