import { StatusBadge, type BadgeTone } from "@/components/shared/status-badge";
import type { VerificationStatus } from "@/lib/mock/verification";

const statusTones: Record<VerificationStatus, BadgeTone> = {
  Pending: "warning",
  Verified: "success",
  Rejected: "danger",
};

export function VerificationStatusBadge({ status }: { status: VerificationStatus }) {
  return <StatusBadge tone={statusTones[status]}>{status}</StatusBadge>;
}
