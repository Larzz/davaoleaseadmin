import { BadgeCheck, CreditCard, RotateCcw, Wallet } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";
import { StatCardView } from "@/components/dashboard/stat-card";
import { ListToolbar } from "@/components/shared/list-toolbar";
import { SubscriptionTable } from "@/components/payments/subscription-table";
import { FeaturedBadgeTable } from "@/components/payments/featured-badge-table";
import { RefundTable } from "@/components/payments/refund-table";
import { InvoiceTable } from "@/components/payments/invoice-table";
import {
  paymentStatCards,
  subscriptions,
  featuredBadges,
  refunds,
  invoices,
} from "@/lib/mock/payments";

const statIcons = [Wallet, CreditCard, RotateCcw, BadgeCheck];

export default function PaymentsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {paymentStatCards.map((stat, i) => (
          <StatCardView key={stat.label} {...stat} icon={statIcons[i]} />
        ))}
      </div>

      <Card>
        <CardContent>
          <Tabs defaultValue="subscriptions">
            <TabsList>
              <TabsTab value="subscriptions">Subscriptions</TabsTab>
              <TabsTab value="featured">Featured Badges</TabsTab>
              <TabsTab value="refunds">Refunds</TabsTab>
              <TabsTab value="invoices">Invoices</TabsTab>
            </TabsList>

            <TabsPanel value="subscriptions" className="flex flex-col gap-4">
              <ListToolbar searchPlaceholder="Search subscriptions..." />
              <SubscriptionTable subscriptions={subscriptions} />
            </TabsPanel>

            <TabsPanel value="featured" className="flex flex-col gap-4">
              <ListToolbar searchPlaceholder="Search featured listings..." />
              <FeaturedBadgeTable badges={featuredBadges} />
            </TabsPanel>

            <TabsPanel value="refunds" className="flex flex-col gap-4">
              <ListToolbar searchPlaceholder="Search refund requests..." />
              <RefundTable refunds={refunds} />
            </TabsPanel>

            <TabsPanel value="invoices" className="flex flex-col gap-4">
              <ListToolbar searchPlaceholder="Search invoices..." />
              <InvoiceTable invoices={invoices} />
            </TabsPanel>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
