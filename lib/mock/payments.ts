export type SubscriptionStatus = "Active" | "Past Due" | "Cancelled";
export type RefundStatus = "Pending" | "Approved" | "Denied";
export type InvoiceStatus = "Paid" | "Pending" | "Overdue";

export interface Subscription {
  id: string;
  account: string;
  plan: "Starter" | "Pro" | "Agency";
  amount: number;
  renewalDate: string;
  status: SubscriptionStatus;
}

export interface FeaturedBadge {
  id: string;
  listing: string;
  agent: string;
  amount: number;
  startedAt: string;
  expiresAt: string;
  status: "Active" | "Expired";
}

export interface Refund {
  id: string;
  transactionId: string;
  account: string;
  amount: number;
  reason: string;
  requestedAt: string;
  status: RefundStatus;
}

export interface Invoice {
  id: string;
  invoiceNo: string;
  account: string;
  amount: number;
  date: string;
  status: InvoiceStatus;
}

export const paymentStatCards = [
  { label: "Revenue This Month", value: "₱842,300", caption: "+8.4% vs last month" },
  { label: "Active Subscriptions", value: "268", caption: "14 renewing this week" },
  { label: "Pending Refunds", value: "6", caption: "₱18,400 total" },
  { label: "Featured Listings", value: "37", caption: "9 expiring this week" },
];

export const subscriptions: Subscription[] = [
  { id: "SUB-501", account: "DavaoHomes Realty", plan: "Agency", amount: 12000, renewalDate: "2026-07-15", status: "Active" },
  { id: "SUB-498", account: "Maria Santos", plan: "Pro", amount: 1500, renewalDate: "2026-07-08", status: "Active" },
  { id: "SUB-492", account: "Matina Property Group", plan: "Agency", amount: 12000, renewalDate: "2026-07-05", status: "Past Due" },
  { id: "SUB-487", account: "Jerome Villaflor", plan: "Starter", amount: 500, renewalDate: "2026-06-30", status: "Cancelled" },
  { id: "SUB-480", account: "Poblacion Realty Hub", plan: "Agency", amount: 12000, renewalDate: "2026-08-01", status: "Active" },
];

export const featuredBadges: FeaturedBadge[] = [
  { id: "FB-210", listing: "2BR Condo Unit, Azalea Towers", agent: "Maria Santos", amount: 800, startedAt: "2026-06-25", expiresAt: "2026-07-09", status: "Active" },
  { id: "FB-209", listing: "Commercial Space, Roxas Ave", agent: "Carlo Dizon", amount: 1200, startedAt: "2026-06-20", expiresAt: "2026-07-04", status: "Active" },
  { id: "FB-207", listing: "3BR House and Lot", agent: "Anna Reyes", amount: 800, startedAt: "2026-06-10", expiresAt: "2026-06-24", status: "Expired" },
];

export const refunds: Refund[] = [
  { id: "RF-118", transactionId: "TXN-88213", account: "Jerome Villaflor", amount: 500, reason: "Duplicate subscription charge", requestedAt: "2026-07-01", status: "Pending" },
  { id: "RF-117", transactionId: "TXN-88109", account: "Bea Fernandez", amount: 800, reason: "Featured badge listing was rejected before activation", requestedAt: "2026-06-29", status: "Pending" },
  { id: "RF-115", transactionId: "TXN-87920", account: "Matina Property Group", amount: 12000, reason: "Downgraded plan mid-cycle", requestedAt: "2026-06-24", status: "Approved" },
  { id: "RF-112", transactionId: "TXN-87604", account: "Carlo Dizon", amount: 500, reason: "Accidental double payment", requestedAt: "2026-06-19", status: "Denied" },
];

export const invoices: Invoice[] = [
  { id: "INV-3305", invoiceNo: "DL-2026-3305", account: "DavaoHomes Realty", amount: 12000, date: "2026-06-15", status: "Paid" },
  { id: "INV-3299", invoiceNo: "DL-2026-3299", account: "Maria Santos", amount: 1500, date: "2026-06-08", status: "Paid" },
  { id: "INV-3288", invoiceNo: "DL-2026-3288", account: "Matina Property Group", amount: 12000, date: "2026-06-05", status: "Overdue" },
  { id: "INV-3271", invoiceNo: "DL-2026-3271", account: "Poblacion Realty Hub", amount: 12000, date: "2026-05-30", status: "Pending" },
];
