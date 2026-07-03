import { StatusBadge, type BadgeTone } from "@/components/shared/status-badge";
import type { UserStatus } from "@/lib/mock/users";

const statusTones: Record<UserStatus, BadgeTone> = {
  Active: "success",
  Suspended: "danger",
  Pending: "warning",
};

export function UserStatusBadge({ status }: { status: UserStatus }) {
  return <StatusBadge tone={statusTones[status]}>{status}</StatusBadge>;
}
