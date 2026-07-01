import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { ListingStatus } from "@/lib/mock-data";

const statusStyles: Record<ListingStatus, string> = {
  Active: "bg-emerald-100 text-emerald-700",
  Pending: "bg-zinc-100 text-zinc-600",
  Sold: "bg-blue-100 text-blue-700",
};

export function ListingStatusBadge({ status }: { status: ListingStatus }) {
  return (
    <Badge variant="outline" className={cn("border-transparent", statusStyles[status])}>
      {status}
    </Badge>
  );
}
