import Link from "next/link";
import {
  Building2,
  CalendarCheck,
  DollarSign,
  Home,
  MoreHorizontal,
  ShieldQuestion,
  UserCheck,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Badge } from "@/components/ui/badge";
import { StatCardView } from "@/components/dashboard/stat-card";
import { ListingStatusBadge } from "@/components/dashboard/status-badge";
import { SignupsChart } from "@/components/dashboard/signups-chart";
import {
  formatPHP,
  recentActivity,
  recentListings,
  monthlySignups,
  statCards,
} from "@/lib/mock-data";

const statIcons = [Home, UserCheck, Building2, DollarSign, CalendarCheck, ShieldQuestion];

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {statCards.map((stat, i) => (
          <StatCardView key={stat.label} {...stat} icon={statIcons[i]} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Recent Listings</CardTitle>
            <Link
              href="/listings"
              className="text-sm font-medium text-primary hover:underline"
            >
              View All
            </Link>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Agent</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="w-8" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentListings.map((listing) => (
                  <TableRow key={listing.id}>
                    <TableCell className="font-medium">
                      {listing.property}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {listing.location}
                    </TableCell>
                    <TableCell>{formatPHP(listing.price)}</TableCell>
                    <TableCell>
                      <ListingStatusBadge status={listing.status} />
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {listing.agent}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {listing.createdAt}
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
                          <DropdownMenuItem>View details</DropdownMenuItem>
                          <DropdownMenuItem>Approve</DropdownMenuItem>
                          <DropdownMenuItem>Flag</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {recentActivity.map((item) => (
              <div key={item.id} className="flex flex-col gap-1 border-b pb-4 last:border-b-0 last:pb-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium">{item.name}</span>
                  <Badge
                    variant={item.status === "New" ? "default" : "secondary"}
                  >
                    {item.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{item.message}</p>
                <span className="text-xs text-muted-foreground">
                  {item.timestamp}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Monthly Signups</CardTitle>
        </CardHeader>
        <CardContent>
          <SignupsChart data={monthlySignups} />
        </CardContent>
      </Card>
    </div>
  );
}
