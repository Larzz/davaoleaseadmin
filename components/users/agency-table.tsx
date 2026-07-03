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
import { UserStatusBadge } from "@/components/users/user-status-badge";
import type { AgencyRecord } from "@/lib/mock/users";

export function AgencyTable({ agencies }: { agencies: AgencyRecord[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Agency</TableHead>
          <TableHead>Contact Person</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Agents</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Joined</TableHead>
          <TableHead className="w-8" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {agencies.map((agency) => (
          <TableRow key={agency.id}>
            <TableCell className="font-medium">{agency.name}</TableCell>
            <TableCell className="text-muted-foreground">{agency.contact}</TableCell>
            <TableCell className="text-muted-foreground">{agency.email}</TableCell>
            <TableCell>{agency.agents}</TableCell>
            <TableCell>
              <UserStatusBadge status={agency.status} />
            </TableCell>
            <TableCell className="text-muted-foreground">{agency.joinedAt}</TableCell>
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
                  <DropdownMenuItem>View details</DropdownMenuItem>
                  <DropdownMenuItem>
                    {agency.status === "Suspended" ? "Activate" : "Suspend"}
                  </DropdownMenuItem>
                  <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
