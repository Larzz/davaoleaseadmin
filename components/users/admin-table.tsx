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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { UserStatusBadge } from "@/components/users/user-status-badge";
import { getInitials } from "@/lib/utils";
import type { AdminRecord } from "@/lib/mock/users";

export function AdminTable({ admins }: { admins: AdminRecord[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last Active</TableHead>
          <TableHead className="w-8" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {admins.map((admin) => (
          <TableRow key={admin.id}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <Avatar size="sm">
                  <AvatarFallback>{getInitials(admin.name)}</AvatarFallback>
                </Avatar>
                {admin.name}
              </div>
            </TableCell>
            <TableCell className="text-muted-foreground">{admin.email}</TableCell>
            <TableCell>
              <Badge variant="secondary">{admin.role}</Badge>
            </TableCell>
            <TableCell>
              <UserStatusBadge status={admin.status} />
            </TableCell>
            <TableCell className="text-muted-foreground">{admin.lastActive}</TableCell>
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
                  <DropdownMenuItem>Edit permissions</DropdownMenuItem>
                  <DropdownMenuItem>
                    {admin.status === "Suspended" ? "Activate" : "Suspend"}
                  </DropdownMenuItem>
                  <DropdownMenuItem variant="destructive">Remove admin</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
