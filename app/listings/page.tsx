import { CheckCircle2, ChevronDown, ClipboardList, Flag, Home } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { StatCardView } from "@/components/dashboard/stat-card";
import { ListToolbar } from "@/components/shared/list-toolbar";
import { ListingTable } from "@/components/listings/listing-table";
import { listingStatCards, listingQueue } from "@/lib/mock/listings";

const statIcons = [ClipboardList, CheckCircle2, Flag, Home];

export default function ListingsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {listingStatCards.map((stat, i) => (
          <StatCardView key={stat.label} {...stat} icon={statIcons[i]} />
        ))}
      </div>

      <Card>
        <CardContent className="flex flex-col gap-4">
          <ListToolbar searchPlaceholder="Search listings...">
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button variant="outline" size="sm">
                    Status
                    <ChevronDown />
                  </Button>
                }
              />
              <DropdownMenuContent align="start">
                <DropdownMenuItem>All</DropdownMenuItem>
                <DropdownMenuItem>Pending</DropdownMenuItem>
                <DropdownMenuItem>Active</DropdownMenuItem>
                <DropdownMenuItem>Flagged</DropdownMenuItem>
                <DropdownMenuItem>Suspended</DropdownMenuItem>
                <DropdownMenuItem>Rejected</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ListToolbar>
          <ListingTable listings={listingQueue} />
        </CardContent>
      </Card>
    </div>
  );
}
