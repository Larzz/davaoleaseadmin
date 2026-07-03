"use client";

import { useState } from "react";
import { CheckCircle2, FileText, MoreHorizontal, XCircle } from "lucide-react";

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
import { Textarea } from "@/components/ui/textarea";
import { VerificationStatusBadge } from "@/components/verification/verification-status-badge";
import type { VerificationRequest } from "@/lib/mock/verification";

export function VerificationTable({ requests }: { requests: VerificationRequest[] }) {
  const [selected, setSelected] = useState<VerificationRequest | null>(null);
  const [showRejectReason, setShowRejectReason] = useState(false);

  function closeSheet() {
    setSelected(null);
    setShowRejectReason(false);
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Applicant</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Document Ref.</TableHead>
            <TableHead>Submitted</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-8" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((request) => (
            <TableRow
              key={request.id}
              className="cursor-pointer"
              onClick={() => setSelected(request)}
            >
              <TableCell className="font-medium">{request.applicant}</TableCell>
              <TableCell className="text-muted-foreground">{request.role}</TableCell>
              <TableCell className="text-muted-foreground">{request.documentRef}</TableCell>
              <TableCell className="text-muted-foreground">{request.submittedAt}</TableCell>
              <TableCell>
                <VerificationStatusBadge status={request.status} />
              </TableCell>
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

      <Sheet open={selected !== null} onOpenChange={(open) => !open && closeSheet()}>
        <SheetContent>
          {selected && (
            <>
              <SheetHeader>
                <SheetTitle>{selected.applicant}</SheetTitle>
                <SheetDescription>
                  {selected.type} · {selected.role}
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-3 px-4 text-sm">
                <div className="flex h-40 flex-col items-center justify-center gap-2 rounded-lg border border-dashed bg-muted text-muted-foreground">
                  <FileText className="size-8" />
                  <span className="text-xs">Document preview unavailable in mockup</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Reference No.</span>
                  <span className="font-medium">{selected.documentRef}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Submitted</span>
                  <span className="font-medium">{selected.submittedAt}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <VerificationStatusBadge status={selected.status} />
                </div>
                {showRejectReason && (
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-medium text-muted-foreground">
                      Rejection reason
                    </span>
                    <Textarea placeholder="Explain why this document is being rejected..." />
                  </div>
                )}
              </div>
              <SheetFooter className="flex-row gap-2">
                {showRejectReason ? (
                  <Button variant="destructive" className="flex-1" onClick={closeSheet}>
                    Confirm Rejection
                  </Button>
                ) : (
                  <>
                    <Button className="flex-1" onClick={closeSheet}>
                      <CheckCircle2 /> Approve
                    </Button>
                    <Button
                      variant="destructive"
                      className="flex-1"
                      onClick={() => setShowRejectReason(true)}
                    >
                      <XCircle /> Reject
                    </Button>
                  </>
                )}
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
