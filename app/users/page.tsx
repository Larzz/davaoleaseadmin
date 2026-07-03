import {
  Building2,
  ChevronDown,
  ShieldCheck,
  UserCog,
  UserPlus,
  Users as UsersIcon,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { StatCardView } from "@/components/dashboard/stat-card";
import { ListToolbar } from "@/components/shared/list-toolbar";
import { UserTable } from "@/components/users/user-table";
import { AgencyTable } from "@/components/users/agency-table";
import { AdminTable } from "@/components/users/admin-table";
import { userStatCards, renters, agents, agencies, admins } from "@/lib/mock/users";

const statIcons = [UsersIcon, ShieldCheck, Building2, UserCog];

function StatusFilter() {
  return (
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
        <DropdownMenuItem>Active</DropdownMenuItem>
        <DropdownMenuItem>Pending</DropdownMenuItem>
        <DropdownMenuItem>Suspended</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function UsersPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {userStatCards.map((stat, i) => (
          <StatCardView key={stat.label} {...stat} icon={statIcons[i]} />
        ))}
      </div>

      <Card>
        <CardContent>
          <Tabs defaultValue="renters">
            <TabsList>
              <TabsTab value="renters">Renters</TabsTab>
              <TabsTab value="agents">Agents</TabsTab>
              <TabsTab value="agencies">Agencies</TabsTab>
              <TabsTab value="admins">Admins</TabsTab>
            </TabsList>

            <TabsPanel value="renters" className="flex flex-col gap-4">
              <ListToolbar searchPlaceholder="Search renters...">
                <StatusFilter />
              </ListToolbar>
              <UserTable users={renters} />
            </TabsPanel>

            <TabsPanel value="agents" className="flex flex-col gap-4">
              <ListToolbar searchPlaceholder="Search agents...">
                <StatusFilter />
              </ListToolbar>
              <UserTable users={agents} />
            </TabsPanel>

            <TabsPanel value="agencies" className="flex flex-col gap-4">
              <ListToolbar searchPlaceholder="Search agencies...">
                <StatusFilter />
              </ListToolbar>
              <AgencyTable agencies={agencies} />
            </TabsPanel>

            <TabsPanel value="admins" className="flex flex-col gap-4">
              <ListToolbar
                searchPlaceholder="Search admins..."
                action={
                  <Button size="sm">
                    <UserPlus />
                    Add Admin
                  </Button>
                }
              />
              <AdminTable admins={admins} />
            </TabsPanel>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
