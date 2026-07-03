import { StatusBadge, type BadgeTone } from "@/components/shared/status-badge";
import type { InvoiceStatus, RefundStatus, SubscriptionStatus } from "@/lib/mock/payments";

const subscriptionTones: Record<SubscriptionStatus, BadgeTone> = {
  Active: "success",
  "Past Due": "warning",
  Cancelled: "neutral",
};

const refundTones: Record<RefundStatus, BadgeTone> = {
  Pending: "warning",
  Approved: "success",
  Denied: "danger",
};

const invoiceTones: Record<InvoiceStatus, BadgeTone> = {
  Paid: "success",
  Pending: "warning",
  Overdue: "danger",
};

const featuredTones: Record<"Active" | "Expired", BadgeTone> = {
  Active: "success",
  Expired: "neutral",
};

export function SubscriptionStatusBadge({ status }: { status: SubscriptionStatus }) {
  return <StatusBadge tone={subscriptionTones[status]}>{status}</StatusBadge>;
}

export function RefundStatusBadge({ status }: { status: RefundStatus }) {
  return <StatusBadge tone={refundTones[status]}>{status}</StatusBadge>;
}

export function InvoiceStatusBadge({ status }: { status: InvoiceStatus }) {
  return <StatusBadge tone={invoiceTones[status]}>{status}</StatusBadge>;
}

export function FeaturedStatusBadge({ status }: { status: "Active" | "Expired" }) {
  return <StatusBadge tone={featuredTones[status]}>{status}</StatusBadge>;
}
