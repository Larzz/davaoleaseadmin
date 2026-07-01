import { ShieldCheck } from "lucide-react";

import { ComingSoon } from "@/components/coming-soon";

export default function VerificationCenterPage() {
  return (
    <ComingSoon
      title="Verification Center"
      description="Verify PRC licenses, government IDs, broker licenses, and business permits."
      icon={ShieldCheck}
    />
  );
}
