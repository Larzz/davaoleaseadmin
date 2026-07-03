import { AlertTriangle, CheckCircle2, Clock, XCircle } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";
import { StatCardView } from "@/components/dashboard/stat-card";
import { ListToolbar } from "@/components/shared/list-toolbar";
import { VerificationTable } from "@/components/verification/verification-table";
import {
  verificationStatCards,
  verificationRequests,
  type VerificationType,
} from "@/lib/mock/verification";

const statIcons = [Clock, CheckCircle2, XCircle, AlertTriangle];

const documentTabs: { value: string; label: string; type: VerificationType }[] = [
  { value: "prc", label: "PRC License", type: "PRC License" },
  { value: "gov-id", label: "Government ID", type: "Government ID" },
  { value: "broker", label: "Broker License", type: "Broker License" },
  { value: "permit", label: "Business Permit", type: "Business Permit" },
];

export default function VerificationPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {verificationStatCards.map((stat, i) => (
          <StatCardView key={stat.label} {...stat} icon={statIcons[i]} />
        ))}
      </div>

      <Card>
        <CardContent>
          <Tabs defaultValue="prc">
            <TabsList>
              {documentTabs.map((tab) => (
                <TabsTab key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTab>
              ))}
            </TabsList>

            {documentTabs.map((tab) => (
              <TabsPanel key={tab.value} value={tab.value} className="flex flex-col gap-4">
                <ListToolbar searchPlaceholder={`Search ${tab.label.toLowerCase()} requests...`} />
                <VerificationTable
                  requests={verificationRequests.filter((r) => r.type === tab.type)}
                />
              </TabsPanel>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
