import { Users } from "lucide-react";

import { ComingSoon } from "@/components/coming-soon";

export default function UsersPage() {
  return (
    <ComingSoon
      title="Users"
      description="Manage renters, agents, agencies, and admins."
      icon={Users}
    />
  );
}
