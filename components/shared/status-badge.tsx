import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export type BadgeTone = "success" | "warning" | "danger" | "info" | "neutral";

const toneStyles: Record<BadgeTone, string> = {
  success: "bg-emerald-100 text-emerald-700",
  warning: "bg-amber-100 text-amber-700",
  danger: "bg-red-100 text-red-700",
  info: "bg-blue-100 text-blue-700",
  neutral: "bg-zinc-100 text-zinc-600",
};

export function StatusBadge({
  tone,
  children,
  className,
}: {
  tone: BadgeTone;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Badge
      variant="outline"
      className={cn("border-transparent", toneStyles[tone], className)}
    >
      {children}
    </Badge>
  );
}
