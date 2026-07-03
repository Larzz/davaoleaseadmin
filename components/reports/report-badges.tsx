import { StatusBadge, type BadgeTone } from "@/components/shared/status-badge";
import type { ReportSeverity, ReportStatus } from "@/lib/mock/reports";

const severityTones: Record<ReportSeverity, BadgeTone> = {
  Low: "neutral",
  Medium: "warning",
  High: "danger",
};

const statusTones: Record<ReportStatus, BadgeTone> = {
  Open: "warning",
  Investigating: "info",
  Resolved: "success",
  Dismissed: "neutral",
};

export function SeverityBadge({ severity }: { severity: ReportSeverity }) {
  return <StatusBadge tone={severityTones[severity]}>{severity}</StatusBadge>;
}

export function ReportStatusBadge({ status }: { status: ReportStatus }) {
  return <StatusBadge tone={statusTones[status]}>{status}</StatusBadge>;
}
