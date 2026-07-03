import { Check, X } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { RefundStatusBadge } from "@/components/payments/payment-badges";
import { formatPHP } from "@/lib/mock-data";
import type { Refund } from "@/lib/mock/payments";

export function RefundTable({ refunds }: { refunds: Refund[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Transaction</TableHead>
          <TableHead>Account</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Reason</TableHead>
          <TableHead>Requested</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-24" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {refunds.map((refund) => (
          <TableRow key={refund.id}>
            <TableCell className="font-medium">{refund.transactionId}</TableCell>
            <TableCell className="text-muted-foreground">{refund.account}</TableCell>
            <TableCell>{formatPHP(refund.amount)}</TableCell>
            <TableCell className="max-w-64 truncate text-muted-foreground">
              {refund.reason}
            </TableCell>
            <TableCell className="text-muted-foreground">{refund.requestedAt}</TableCell>
            <TableCell>
              <RefundStatusBadge status={refund.status} />
            </TableCell>
            <TableCell>
              {refund.status === "Pending" && (
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon-sm" aria-label="Approve refund">
                    <Check />
                  </Button>
                  <Button variant="ghost" size="icon-sm" aria-label="Deny refund">
                    <X />
                  </Button>
                </div>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
