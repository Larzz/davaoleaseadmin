import { BookOpen, Clock, MessagesSquare, Plus, Ticket as TicketIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatCardView } from "@/components/dashboard/stat-card";
import { ListToolbar } from "@/components/shared/list-toolbar";
import { TicketInbox } from "@/components/support/ticket-inbox";
import { FaqTable } from "@/components/support/faq-table";
import { supportStatCards, tickets, faqEntries } from "@/lib/mock/support";

const statIcons = [TicketIcon, Clock, MessagesSquare, BookOpen];

export default function SupportPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {supportStatCards.map((stat, i) => (
          <StatCardView key={stat.label} {...stat} icon={statIcons[i]} />
        ))}
      </div>

      <TicketInbox tickets={tickets} />

      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle>FAQ Management</CardTitle>
          <Button size="sm">
            <Plus /> Add FAQ
          </Button>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <ListToolbar searchPlaceholder="Search FAQ entries..." />
          <FaqTable entries={faqEntries} />
        </CardContent>
      </Card>
    </div>
  );
}
