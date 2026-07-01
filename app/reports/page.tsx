import { Flag } from "lucide-react";

import { ComingSoon } from "@/components/coming-soon";

export default function ReportsPage() {
  return (
    <ComingSoon
      title="Reports"
      description="Review flagged listings, fraud, spam, and fake agents."
      icon={Flag}
    />
  );
}
