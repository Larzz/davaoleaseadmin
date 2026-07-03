import { StatusBadge, type BadgeTone } from "@/components/shared/status-badge";
import type { ArticleStatus } from "@/lib/mock/blog";

const statusTones: Record<ArticleStatus, BadgeTone> = {
  Published: "success",
  Draft: "neutral",
};

export function ArticleStatusBadge({ status }: { status: ArticleStatus }) {
  return <StatusBadge tone={statusTones[status]}>{status}</StatusBadge>;
}
