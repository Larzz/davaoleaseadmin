import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FeaturedStatusBadge } from "@/components/payments/payment-badges";
import { formatPHP } from "@/lib/mock-data";
import type { FeaturedBadge } from "@/lib/mock/payments";

export function FeaturedBadgeTable({ badges }: { badges: FeaturedBadge[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Listing</TableHead>
          <TableHead>Agent</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Started</TableHead>
          <TableHead>Expires</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {badges.map((badge) => (
          <TableRow key={badge.id}>
            <TableCell className="font-medium">{badge.listing}</TableCell>
            <TableCell className="text-muted-foreground">{badge.agent}</TableCell>
            <TableCell>{formatPHP(badge.amount)}</TableCell>
            <TableCell className="text-muted-foreground">{badge.startedAt}</TableCell>
            <TableCell className="text-muted-foreground">{badge.expiresAt}</TableCell>
            <TableCell>
              <FeaturedStatusBadge status={badge.status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
