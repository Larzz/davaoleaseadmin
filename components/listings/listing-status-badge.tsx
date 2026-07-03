import { StatusBadge, type BadgeTone } from "@/components/shared/status-badge";
import type { ListingQueueStatus } from "@/lib/mock/listings";

const statusTones: Record<ListingQueueStatus, BadgeTone> = {
  Pending: "warning",
  Active: "success",
  Flagged: "danger",
  Suspended: "neutral",
  Rejected: "danger",
};

export function ListingQueueStatusBadge({ status }: { status: ListingQueueStatus }) {
  return <StatusBadge tone={statusTones[status]}>{status}</StatusBadge>;
}
