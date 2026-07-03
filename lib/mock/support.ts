export type TicketStatus = "Open" | "In Progress" | "Resolved";
export type TicketPriority = "Low" | "Medium" | "High";

export interface TicketMessage {
  id: string;
  from: "user" | "agent";
  author: string;
  message: string;
  timestamp: string;
}

export interface Ticket {
  id: string;
  subject: string;
  requester: string;
  channel: "Email" | "Live Chat" | "Phone";
  priority: TicketPriority;
  status: TicketStatus;
  updatedAt: string;
  messages: TicketMessage[];
}

export interface FaqEntry {
  id: string;
  question: string;
  category: string;
  views: number;
  status: "Published" | "Draft";
}

export const supportStatCards = [
  { label: "Open Tickets", value: "27", caption: "8 unassigned" },
  { label: "Avg Response Time", value: "14 min", caption: "-3 min vs last week" },
  { label: "Live Chats Active", value: "5", caption: "2 waiting" },
  { label: "FAQ Articles", value: "42", caption: "6 drafts pending" },
];

export const tickets: Ticket[] = [
  {
    id: "T-5021",
    subject: "Can't upload PRC License for verification",
    requester: "Ronald Cabaraban",
    channel: "Live Chat",
    priority: "High",
    status: "Open",
    updatedAt: "2 min ago",
    messages: [
      { id: "m1", from: "user", author: "Ronald Cabaraban", message: "Hi, I keep getting an error when I try to upload my PRC license image. It says file too large.", timestamp: "10:02 AM" },
      { id: "m2", from: "agent", author: "Cristine Bautista", message: "Hi Ronald! Thanks for reaching out. Could you tell me the file size and format you're using?", timestamp: "10:05 AM" },
      { id: "m3", from: "user", author: "Ronald Cabaraban", message: "It's a JPG, about 15MB from my phone camera.", timestamp: "10:06 AM" },
    ],
  },
  {
    id: "T-5019",
    subject: "Refund not received after cancelling subscription",
    requester: "Jerome Villaflor",
    channel: "Email",
    priority: "High",
    status: "In Progress",
    updatedAt: "38 min ago",
    messages: [
      { id: "m1", from: "user", author: "Jerome Villaflor", message: "I cancelled my Starter plan last week but haven't received my refund yet.", timestamp: "Yesterday, 4:12 PM" },
      { id: "m2", from: "agent", author: "Marco Villanueva", message: "Thanks for flagging this, I've escalated it to billing. You should see the refund within 3-5 business days.", timestamp: "Yesterday, 4:40 PM" },
    ],
  },
  {
    id: "T-5015",
    subject: "How do I mark a listing as sold?",
    requester: "Anna Reyes",
    channel: "Phone",
    priority: "Low",
    status: "Resolved",
    updatedAt: "3 hrs ago",
    messages: [
      { id: "m1", from: "user", author: "Anna Reyes", message: "Quick question - how do I mark my listing as sold once a renter moves in?", timestamp: "9:15 AM" },
      { id: "m2", from: "agent", author: "Cristine Bautista", message: "You can update the status from your listing dashboard under 'Manage Listings' > Edit Status.", timestamp: "9:20 AM" },
    ],
  },
  {
    id: "T-5011",
    subject: "Suspicious message from another agent",
    requester: "Katrina Uy",
    channel: "Live Chat",
    priority: "Medium",
    status: "Open",
    updatedAt: "5 hrs ago",
    messages: [
      { id: "m1", from: "user", author: "Katrina Uy", message: "An agent asked me to pay directly outside the platform, is that allowed?", timestamp: "8:02 AM" },
    ],
  },
];

export const faqEntries: FaqEntry[] = [
  { id: "FAQ-1", question: "How do I verify my PRC License?", category: "Verification", views: 4210, status: "Published" },
  { id: "FAQ-2", question: "What documents are required for agency onboarding?", category: "Onboarding", views: 3120, status: "Published" },
  { id: "FAQ-3", question: "How are featured listing badges priced?", category: "Payments", views: 2540, status: "Published" },
  { id: "FAQ-4", question: "How do I report a suspicious listing?", category: "Safety", views: 1980, status: "Published" },
  { id: "FAQ-5", question: "What happens if my subscription payment fails?", category: "Payments", views: 1660, status: "Draft" },
  { id: "FAQ-6", question: "Can renters message agents directly?", category: "Platform", views: 1102, status: "Draft" },
];
