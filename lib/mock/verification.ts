export type VerificationType =
  | "PRC License"
  | "Government ID"
  | "Broker License"
  | "Business Permit";

export type VerificationStatus = "Pending" | "Verified" | "Rejected";

export interface VerificationRequest {
  id: string;
  applicant: string;
  role: "Agent" | "Agency";
  type: VerificationType;
  documentRef: string;
  submittedAt: string;
  status: VerificationStatus;
}

export const verificationStatCards = [
  { label: "Pending Verifications", value: "19", caption: "5 flagged for review" },
  { label: "Verified This Month", value: "84", caption: "+14 vs last month" },
  { label: "Rejected", value: "11", caption: "Incomplete or invalid docs" },
  { label: "Flagged for Review", value: "5", caption: "Needs manual inspection" },
];

export const verificationRequests: VerificationRequest[] = [
  { id: "V-2201", applicant: "Carlo Dizon", role: "Agent", type: "PRC License", documentRef: "PRC-0022481", submittedAt: "2026-07-02", status: "Pending" },
  { id: "V-2200", applicant: "Ronald Cabaraban", role: "Agent", type: "Government ID", documentRef: "PhilID-77281940", submittedAt: "2026-07-02", status: "Pending" },
  { id: "V-2198", applicant: "Buhangin Leasing Co.", role: "Agency", type: "Business Permit", documentRef: "BP-DVO-2026-0193", submittedAt: "2026-07-01", status: "Pending" },
  { id: "V-2195", applicant: "Bea Fernandez", role: "Agent", type: "Broker License", documentRef: "PRB-009823", submittedAt: "2026-06-30", status: "Rejected" },
  { id: "V-2190", applicant: "Maria Santos", role: "Agent", type: "PRC License", documentRef: "PRC-0019823", submittedAt: "2026-06-28", status: "Verified" },
  { id: "V-2188", applicant: "DavaoHomes Realty", role: "Agency", type: "Business Permit", documentRef: "BP-DVO-2025-0871", submittedAt: "2026-06-26", status: "Verified" },
  { id: "V-2183", applicant: "Jerome Villaflor", role: "Agent", type: "Government ID", documentRef: "PhilID-55129032", submittedAt: "2026-06-22", status: "Verified" },
];
