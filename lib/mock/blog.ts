export type ArticleStatus = "Published" | "Draft";

export interface Article {
  id: string;
  title: string;
  category: string;
  tags: string[];
  author: string;
  status: ArticleStatus;
  date: string;
  views: number;
}

export interface BlogCategory {
  id: string;
  name: string;
  articles: number;
}

export interface BlogTag {
  id: string;
  name: string;
  articles: number;
}

export const blogStatCards = [
  { label: "Published Articles", value: "58", caption: "6 published this month" },
  { label: "Drafts", value: "9", caption: "3 awaiting review" },
  { label: "Categories", value: "6", caption: "Across the blog" },
  { label: "Total Views", value: "182,430", caption: "+9.2% vs last month" },
];

export const articles: Article[] = [
  { id: "BP-241", title: "5 Neighborhoods in Davao City Perfect for First-Time Renters", category: "Renter Guides", tags: ["renting", "davao-city"], author: "Cristine Bautista", status: "Published", date: "2026-06-28", views: 4820 },
  { id: "BP-240", title: "How to Spot a Fake Listing Before You Get Scammed", category: "Safety", tags: ["fraud", "safety"], author: "Marco Villanueva", status: "Published", date: "2026-06-24", views: 6710 },
  { id: "BP-239", title: "Broker License Renewal: What Agents Need to Know for 2026", category: "Agent Resources", tags: ["licensing", "agents"], author: "Vanessa Cruz", status: "Draft", date: "2026-06-22", views: 0 },
  { id: "BP-238", title: "Matina vs. Buhangin: Where Should You Lease Next?", category: "Renter Guides", tags: ["davao-city", "comparison"], author: "Cristine Bautista", status: "Published", date: "2026-06-18", views: 3940 },
  { id: "BP-237", title: "A Landlord's Guide to Featured Listing Badges", category: "Agent Resources", tags: ["payments", "agents"], author: "Marco Villanueva", status: "Draft", date: "2026-06-15", views: 0 },
  { id: "BP-236", title: "Understanding Security Deposits in the Philippines", category: "Legal", tags: ["legal", "renting"], author: "Vanessa Cruz", status: "Published", date: "2026-06-10", views: 8120 },
];

export const blogCategories: BlogCategory[] = [
  { id: "BC-1", name: "Renter Guides", articles: 22 },
  { id: "BC-2", name: "Agent Resources", articles: 14 },
  { id: "BC-3", name: "Safety", articles: 9 },
  { id: "BC-4", name: "Legal", articles: 8 },
  { id: "BC-5", name: "Market Trends", articles: 7 },
  { id: "BC-6", name: "Company News", articles: 7 },
];

export const blogTags: BlogTag[] = [
  { id: "BT-1", name: "davao-city", articles: 31 },
  { id: "BT-2", name: "renting", articles: 26 },
  { id: "BT-3", name: "agents", articles: 18 },
  { id: "BT-4", name: "safety", articles: 12 },
  { id: "BT-5", name: "fraud", articles: 9 },
  { id: "BT-6", name: "legal", articles: 8 },
  { id: "BT-7", name: "payments", articles: 6 },
];
