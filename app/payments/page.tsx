import { Wallet } from "lucide-react";

import { ComingSoon } from "@/components/coming-soon";

export default function PaymentsPage() {
  return (
    <ComingSoon
      title="Payments"
      description="Manage subscriptions, featured listing badges, refunds, and invoices."
      icon={Wallet}
    />
  );
}
