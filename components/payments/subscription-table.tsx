import { MoreHorizontal } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SubscriptionStatusBadge } from "@/components/payments/payment-badges";
import { formatPHP } from "@/lib/mock-data";
import type { Subscription } from "@/lib/mock/payments";

export function SubscriptionTable({ subscriptions }: { subscriptions: Subscription[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Account</TableHead>
          <TableHead>Plan</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Renewal Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-8" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {subscriptions.map((sub) => (
          <TableRow key={sub.id}>
            <TableCell className="font-medium">{sub.account}</TableCell>
            <TableCell className="text-muted-foreground">{sub.plan}</TableCell>
            <TableCell>{formatPHP(sub.amount)}</TableCell>
            <TableCell className="text-muted-foreground">{sub.renewalDate}</TableCell>
            <TableCell>
              <SubscriptionStatusBadge status={sub.status} />
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant="ghost" size="icon-sm">
                      <MoreHorizontal />
                    </Button>
                  }
                />
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View invoices</DropdownMenuItem>
                  <DropdownMenuItem>Change plan</DropdownMenuItem>
                  <DropdownMenuItem variant="destructive">Cancel subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
