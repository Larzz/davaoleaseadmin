"use client";

import { MapPin, MoreHorizontal, Plus } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { CityLocation } from "@/lib/mock/categories";

export function LocationList({ cities }: { cities: CityLocation[] }) {
  return (
    <div className="flex flex-col gap-3">
      {cities.map((city) => (
        <Card key={city.id} size="sm">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <MapPin className="size-4 text-muted-foreground" />
              {city.name}
              <Badge variant="secondary">{city.listings} listings</Badge>
            </CardTitle>
            <Button variant="outline" size="sm">
              <Plus /> Add Barangay
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {city.barangays.map((barangay) => (
                <div
                  key={barangay.id}
                  className="flex items-center gap-1.5 rounded-lg bg-muted px-2.5 py-1 text-sm"
                >
                  <span className="font-medium">{barangay.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {barangay.listings}
                  </span>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <Button variant="ghost" size="icon-xs" className="ml-1">
                          <MoreHorizontal />
                        </Button>
                      }
                    />
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
