import { ClipboardCheck } from "lucide-react";

import { ComingSoon } from "@/components/coming-soon";

export default function ListingApprovalPage() {
  return (
    <ComingSoon
      title="Listing Approval"
      description="Approve, reject, flag, or suspend property listings."
      icon={ClipboardCheck}
    />
  );
}
