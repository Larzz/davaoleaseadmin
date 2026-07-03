"use client";

import { useState } from "react";
import { CheckCircle2, Flag, MoreHorizontal, PauseCircle, XCircle } from "lucide-react";

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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ListingQueueStatusBadge } from "@/components/listings/listing-status-badge";
import { formatPHP } from "@/lib/mock-data";
import type { QueuedListing } from "@/lib/mock/listings";

export function ListingTable({ listings }: { listings: QueuedListing[] }) {
  const [selected, setSelected] = useState<QueuedListing | null>(null);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Property</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Agent</TableHead>
            <TableHead>Submitted</TableHead>
            <TableHead className="w-8" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {listings.map((listing) => (
            <TableRow
              key={listing.id}
              className="cursor-pointer"
              onClick={() => setSelected(listing)}
            >
              <TableCell className="font-medium">{listing.property}</TableCell>
              <TableCell className="text-muted-foreground">{listing.location}</TableCell>
              <TableCell>{formatPHP(listing.price)}</TableCell>
              <TableCell>
                <ListingQueueStatusBadge status={listing.status} />
              </TableCell>
              <TableCell className="text-muted-foreground">{listing.agent}</TableCell>
              <TableCell className="text-muted-foreground">{listing.createdAt}</TableCell>
              <TableCell onClick={(e) => e.stopPropagation()}>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button variant="ghost" size="icon-sm">
                        <MoreHorizontal />
                      </Button>
                    }
                  />
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <CheckCircle2 /> Approve
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Flag /> Flag
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <PauseCircle /> Suspend
                    </DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">
                      <XCircle /> Reject
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Sheet
        open={selected !== null}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <SheetContent>
          {selected && (
            <>
              <SheetHeader>
                <SheetTitle>{selected.property}</SheetTitle>
                <SheetDescription>{selected.location}</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-3 px-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <ListingQueueStatusBadge status={selected.status} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Price</span>
                  <span className="font-medium">{formatPHP(selected.price)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Agent</span>
                  <span className="font-medium">{selected.agent}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Submitted</span>
                  <span className="font-medium">{selected.createdAt}</span>
                </div>
                {selected.reason && (
                  <div className="flex flex-col gap-1 rounded-lg bg-muted p-3">
                    <span className="text-xs font-medium text-muted-foreground">
                      Flag reason
                    </span>
                    <span>{selected.reason}</span>
                  </div>
                )}
              </div>
              <SheetFooter className="grid grid-cols-2 gap-2">
                <Button onClick={() => setSelected(null)}>
                  <CheckCircle2 /> Approve
                </Button>
                <Button variant="outline" onClick={() => setSelected(null)}>
                  <Flag /> Flag
                </Button>
                <Button variant="outline" onClick={() => setSelected(null)}>
                  <PauseCircle /> Suspend
                </Button>
                <Button variant="destructive" onClick={() => setSelected(null)}>
                  <XCircle /> Reject
                </Button>
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
