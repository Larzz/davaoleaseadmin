export type ListingStatus = "Active" | "Pending" | "Sold";

export interface StatCard {
  label: string;
  value: string;
  caption: string;
}

export interface RecentListing {
  id: string;
  property: string;
  location: string;
  price: number;
  status: ListingStatus;
  agent: string;
  createdAt: string;
}

export type ActivityStatus = "New" | "Followed Up";

export interface ActivityItem {
  id: string;
  name: string;
  status: ActivityStatus;
  timestamp: string;
  message: string;
}

export interface MonthlySignup {
  month: string;
  signups: number;
}

export const statCards: StatCard[] = [
  { label: "Total Listings", value: "1,284", caption: "48 added this month" },
  { label: "Active Agents", value: "213", caption: "12 added this month" },
  { label: "Active Agencies", value: "37", caption: "3 added this month" },
  { label: "Revenue", value: "₱842,300", caption: "+8.4% vs last month" },
  { label: "Monthly Signups", value: "156", caption: "22 pending approval" },
  { label: "Pending Verifications", value: "19", caption: "5 flagged for review" },
];

export const recentListings: RecentListing[] = [
  {
    id: "L-1042",
    property: "2BR Condo Unit, Azalea Towers",
    location: "Matina, Davao City",
    price: 18500,
    status: "Active",
    agent: "Maria Santos",
    createdAt: "2026-06-28",
  },
  {
    id: "L-1041",
    property: "Studio Unit, One Wilson Place",
    location: "Bajada, Davao City",
    price: 12000,
    status: "Pending",
    agent: "Jerome Villaflor",
    createdAt: "2026-06-27",
  },
  {
    id: "L-1040",
    property: "3BR House and Lot",
    location: "Buhangin, Davao City",
    price: 25000,
    status: "Active",
    agent: "Anna Reyes",
    createdAt: "2026-06-26",
  },
  {
    id: "L-1039",
    property: "Commercial Space, Roxas Ave",
    location: "Poblacion, Davao City",
    price: 45000,
    status: "Sold",
    agent: "Carlo Dizon",
    createdAt: "2026-06-25",
  },
  {
    id: "L-1038",
    property: "1BR Apartment, Talomo Heights",
    location: "Talomo, Davao City",
    price: 9500,
    status: "Active",
    agent: "Maria Santos",
    createdAt: "2026-06-24",
  },
  {
    id: "L-1037",
    property: "4BR House, Bangkal Village",
    location: "Bangkal, Davao City",
    price: 32000,
    status: "Pending",
    agent: "Jerome Villaflor",
    createdAt: "2026-06-23",
  },
];

export const recentActivity: ActivityItem[] = [
  {
    id: "A-501",
    name: "Ronald Cabaraban",
    status: "New",
    timestamp: "10 min ago",
    message: "Submitted PRC License for verification.",
  },
  {
    id: "A-500",
    name: "Liza Manreal",
    status: "New",
    timestamp: "42 min ago",
    message: "Inquired about a 2BR unit in Matina.",
  },
  {
    id: "A-499",
    name: "DavaoHomes Realty",
    status: "Followed Up",
    timestamp: "1 hr ago",
    message: "Business Permit re-submitted after rejection.",
  },
  {
    id: "A-498",
    name: "Katrina Uy",
    status: "New",
    timestamp: "3 hrs ago",
    message: "Flagged a listing in Buhangin as suspicious.",
  },
  {
    id: "A-497",
    name: "Paolo Aguilar",
    status: "Followed Up",
    timestamp: "5 hrs ago",
    message: "Government ID verification approved.",
  },
];

export const monthlySignups: MonthlySignup[] = [
  { month: "Jan", signups: 62 },
  { month: "Feb", signups: 74 },
  { month: "Mar", signups: 81 },
  { month: "Apr", signups: 68 },
  { month: "May", signups: 97 },
  { month: "Jun", signups: 112 },
  { month: "Jul", signups: 156 },
];

export function formatPHP(amount: number): string {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(amount);
}
