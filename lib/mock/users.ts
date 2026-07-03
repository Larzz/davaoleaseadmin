export type UserStatus = "Active" | "Suspended" | "Pending";

export interface UserRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: UserStatus;
  joinedAt: string;
}

export interface AgencyRecord {
  id: string;
  name: string;
  contact: string;
  email: string;
  agents: number;
  status: UserStatus;
  joinedAt: string;
}

export interface AdminRecord {
  id: string;
  name: string;
  email: string;
  role: "Super Admin" | "Moderator" | "Support";
  status: UserStatus;
  lastActive: string;
}

export const userStatCards = [
  { label: "Total Users", value: "4,812", caption: "126 added this month" },
  { label: "Active Agents", value: "213", caption: "12 added this month" },
  { label: "Active Agencies", value: "37", caption: "3 added this month" },
  { label: "Pending Approvals", value: "18", caption: "Awaiting review" },
];

export const renters: UserRecord[] = [
  { id: "U-3001", name: "Liza Manreal", email: "liza.manreal@gmail.com", phone: "0917 224 5510", status: "Active", joinedAt: "2026-06-30" },
  { id: "U-3000", name: "Ronald Cabaraban", email: "r.cabaraban@gmail.com", phone: "0918 552 1093", status: "Active", joinedAt: "2026-06-29" },
  { id: "U-2998", name: "Katrina Uy", email: "katrina.uy@yahoo.com", phone: "0920 441 7762", status: "Active", joinedAt: "2026-06-27" },
  { id: "U-2991", name: "Paolo Aguilar", email: "paolo.aguilar@gmail.com", phone: "0915 337 2249", status: "Suspended", joinedAt: "2026-06-20" },
  { id: "U-2985", name: "Ella Marquez", email: "ella.marquez@outlook.com", phone: "0921 998 3341", status: "Active", joinedAt: "2026-06-15" },
  { id: "U-2974", name: "Miko Dela Torre", email: "miko.delatorre@gmail.com", phone: "0917 663 5528", status: "Pending", joinedAt: "2026-06-10" },
];

export const agents: UserRecord[] = [
  { id: "AG-501", name: "Maria Santos", email: "maria.santos@davaolease.com", phone: "0917 812 3345", status: "Active", joinedAt: "2026-05-12" },
  { id: "AG-498", name: "Jerome Villaflor", email: "jerome.villaflor@davaolease.com", phone: "0918 224 9981", status: "Active", joinedAt: "2026-04-28" },
  { id: "AG-492", name: "Anna Reyes", email: "anna.reyes@davaolease.com", phone: "0920 776 1129", status: "Active", joinedAt: "2026-04-02" },
  { id: "AG-487", name: "Carlo Dizon", email: "carlo.dizon@davaolease.com", phone: "0915 445 6620", status: "Pending", joinedAt: "2026-06-25" },
  { id: "AG-480", name: "Bea Fernandez", email: "bea.fernandez@davaolease.com", phone: "0921 330 8817", status: "Suspended", joinedAt: "2026-03-14" },
];

export const agencies: AgencyRecord[] = [
  { id: "AC-101", name: "DavaoHomes Realty", contact: "Ramon Lacson", email: "contact@davaohomes.ph", agents: 24, status: "Active", joinedAt: "2025-11-02" },
  { id: "AC-098", name: "Matina Property Group", contact: "Sheila Cortez", email: "info@matinaproperty.ph", agents: 12, status: "Active", joinedAt: "2025-09-19" },
  { id: "AC-093", name: "Buhangin Leasing Co.", contact: "Noel Sarmiento", email: "hello@buhanginleasing.ph", agents: 8, status: "Pending", joinedAt: "2026-06-18" },
  { id: "AC-087", name: "Poblacion Realty Hub", contact: "Grace Tan", email: "admin@poblacionrealty.ph", agents: 15, status: "Suspended", joinedAt: "2025-07-30" },
];

export const admins: AdminRecord[] = [
  { id: "AD-01", name: "Vanessa Cruz", email: "vanessa@davaolease.com", role: "Super Admin", status: "Active", lastActive: "Just now" },
  { id: "AD-02", name: "Marco Villanueva", email: "marco@davaolease.com", role: "Moderator", status: "Active", lastActive: "12 min ago" },
  { id: "AD-03", name: "Cristine Bautista", email: "cristine@davaolease.com", role: "Support", status: "Active", lastActive: "2 hrs ago" },
  { id: "AD-04", name: "Dennis Ong", email: "dennis@davaolease.com", role: "Moderator", status: "Suspended", lastActive: "3 days ago" },
];
