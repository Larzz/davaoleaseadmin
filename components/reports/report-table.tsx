"use client";

import { useState } from "react";
import { CheckCircle2, MoreHorizontal, Search, XCircle } from "lucide-react";

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
import { SeverityBadge, ReportStatusBadge } from "@/components/reports/report-badges";
import type { Report } from "@/lib/mock/reports";

export function ReportTable({ reports }: { reports: Report[] }) {
  const [selected, setSelected] = useState<Report | null>(null);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Target</TableHead>
            <TableHead>Reporter</TableHead>
            <TableHead>Severity</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Filed</TableHead>
            <TableHead className="w-8" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports.map((report) => (
            <TableRow
              key={report.id}
              className="cursor-pointer"
              onClick={() => setSelected(report)}
            >
              <TableCell className="font-medium">{report.type}</TableCell>
              <TableCell className="max-w-64 truncate text-muted-foreground">
                {report.target}
              </TableCell>
              <TableCell className="text-muted-foreground">{report.reporter}</TableCell>
              <TableCell>
                <SeverityBadge severity={report.severity} />
              </TableCell>
              <TableCell>
                <ReportStatusBadge status={report.status} />
              </TableCell>
              <TableCell className="text-muted-foreground">{report.createdAt}</TableCell>
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
                      <Search /> Investigate
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CheckCircle2 /> Resolve
                    </DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">
                      <XCircle /> Dismiss
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Sheet open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <SheetContent>
          {selected && (
            <>
              <SheetHeader>
                <SheetTitle>{selected.type}</SheetTitle>
                <SheetDescription>{selected.target}</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-3 px-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Severity</span>
                  <SeverityBadge severity={selected.severity} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <ReportStatusBadge status={selected.status} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Reported by</span>
                  <span className="font-medium">{selected.reporter}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Filed</span>
                  <span className="font-medium">{selected.createdAt}</span>
                </div>
                <div className="flex flex-col gap-1 rounded-lg bg-muted p-3">
                  <span className="text-xs font-medium text-muted-foreground">Details</span>
                  <span>{selected.details}</span>
                </div>
              </div>
              <SheetFooter className="grid grid-cols-3 gap-2">
                <Button variant="outline" onClick={() => setSelected(null)}>
                  <Search /> Investigate
                </Button>
                <Button onClick={() => setSelected(null)}>
                  <CheckCircle2 /> Resolve
                </Button>
                <Button variant="destructive" onClick={() => setSelected(null)}>
                  <XCircle /> Dismiss
                </Button>
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
