export type ReportType = "Flagged Listing" | "Fraud" | "Spam" | "Fake Agent";
export type ReportSeverity = "Low" | "Medium" | "High";
export type ReportStatus = "Open" | "Investigating" | "Resolved" | "Dismissed";

export interface Report {
  id: string;
  type: ReportType;
  target: string;
  reporter: string;
  severity: ReportSeverity;
  status: ReportStatus;
  createdAt: string;
  details: string;
}

export const reportStatCards = [
  { label: "Open Reports", value: "23", caption: "6 filed today" },
  { label: "Resolved This Week", value: "31", caption: "vs 24 last week" },
  { label: "Fraud Cases", value: "8", caption: "2 escalated" },
  { label: "Fake Agents Flagged", value: "4", caption: "Pending suspension" },
];

export const reports: Report[] = [
  { id: "R-880", type: "Fraud", target: "L-1041 · 4BR House, Bangkal Village", reporter: "Katrina Uy", severity: "High", status: "Investigating", createdAt: "2026-07-02", details: "Renter paid a reservation fee for a listing that was later found duplicated under another agent." },
  { id: "R-879", type: "Fake Agent", target: "Agent · Dennis Ong", reporter: "System", severity: "High", status: "Open", createdAt: "2026-07-01", details: "PRC License number does not match PRC registry records." },
  { id: "R-877", type: "Flagged Listing", target: "L-1044 · 3BR House and Lot, Buhangin", reporter: "Ella Marquez", severity: "Medium", status: "Open", createdAt: "2026-07-01", details: "Listed price is significantly below comparable units in the area." },
  { id: "R-874", type: "Spam", target: "Agent · Unknown Listing Bot", reporter: "Miko Dela Torre", severity: "Low", status: "Dismissed", createdAt: "2026-06-29", details: "Repeated duplicate posting of the same unit across categories." },
  { id: "R-871", type: "Fraud", target: "Agency · Poblacion Realty Hub", reporter: "Paolo Aguilar", severity: "High", status: "Resolved", createdAt: "2026-06-26", details: "Business permit found to be expired at time of onboarding; agency suspended pending renewal." },
  { id: "R-868", type: "Flagged Listing", target: "L-1040 · 2BR Townhouse, Ecoland", reporter: "System", severity: "Medium", status: "Resolved", createdAt: "2026-06-24", details: "Property photos flagged as reused from another listing." },
];
