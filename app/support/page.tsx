import { MessagesSquare } from "lucide-react";

import { ComingSoon } from "@/components/coming-soon";

export default function SupportPage() {
  return (
    <ComingSoon
      title="Support"
      description="Manage tickets, live chat, and the FAQ."
      icon={MessagesSquare}
    />
  );
}
