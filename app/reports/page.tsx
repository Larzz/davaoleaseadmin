import { AlertOctagon, Flag, ShieldAlert, UserX } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";
import { StatCardView } from "@/components/dashboard/stat-card";
import { ListToolbar } from "@/components/shared/list-toolbar";
import { ReportTable } from "@/components/reports/report-table";
import { reportStatCards, reports, type ReportType } from "@/lib/mock/reports";

const statIcons = [Flag, ShieldAlert, AlertOctagon, UserX];

const typeTabs: { value: string; label: string; type: ReportType | "all" }[] = [
  { value: "all", label: "All", type: "all" },
  { value: "flagged", label: "Flagged Listings", type: "Flagged Listing" },
  { value: "fraud", label: "Fraud", type: "Fraud" },
  { value: "spam", label: "Spam", type: "Spam" },
  { value: "fake-agent", label: "Fake Agents", type: "Fake Agent" },
];

export default function ReportsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {reportStatCards.map((stat, i) => (
          <StatCardView key={stat.label} {...stat} icon={statIcons[i]} />
        ))}
      </div>

      <Card>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList>
              {typeTabs.map((tab) => (
                <TabsTab key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTab>
              ))}
            </TabsList>

            {typeTabs.map((tab) => (
              <TabsPanel key={tab.value} value={tab.value} className="flex flex-col gap-4">
                <ListToolbar searchPlaceholder="Search reports..." />
                <ReportTable
                  reports={
                    tab.type === "all" ? reports : reports.filter((r) => r.type === tab.type)
                  }
                />
              </TabsPanel>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
