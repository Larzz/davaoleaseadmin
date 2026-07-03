import { Download } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { InvoiceStatusBadge } from "@/components/payments/payment-badges";
import { formatPHP } from "@/lib/mock-data";
import type { Invoice } from "@/lib/mock/payments";

export function InvoiceTable({ invoices }: { invoices: Invoice[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice No.</TableHead>
          <TableHead>Account</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-8" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.invoiceNo}</TableCell>
            <TableCell className="text-muted-foreground">{invoice.account}</TableCell>
            <TableCell>{formatPHP(invoice.amount)}</TableCell>
            <TableCell className="text-muted-foreground">{invoice.date}</TableCell>
            <TableCell>
              <InvoiceStatusBadge status={invoice.status} />
            </TableCell>
            <TableCell>
              <Button variant="ghost" size="icon-sm" aria-label="Download invoice">
                <Download />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
