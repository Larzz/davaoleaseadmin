import { StatusBadge, type BadgeTone } from "@/components/shared/status-badge";
import type { TicketPriority, TicketStatus } from "@/lib/mock/support";

const statusTones: Record<TicketStatus, BadgeTone> = {
  Open: "warning",
  "In Progress": "info",
  Resolved: "success",
};

const priorityTones: Record<TicketPriority, BadgeTone> = {
  Low: "neutral",
  Medium: "warning",
  High: "danger",
};

export function TicketStatusBadge({ status }: { status: TicketStatus }) {
  return <StatusBadge tone={statusTones[status]}>{status}</StatusBadge>;
}

export function TicketPriorityBadge({ priority }: { priority: TicketPriority }) {
  return <StatusBadge tone={priorityTones[priority]}>{priority}</StatusBadge>;
}
