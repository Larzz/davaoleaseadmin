import { Home, MapPinned, Plus, Sparkles } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ListToolbar } from "@/components/shared/list-toolbar";
import { CategoryGrid } from "@/components/categories/category-grid";
import { LocationList } from "@/components/categories/location-list";
import { propertyTypes, amenities, cityLocations } from "@/lib/mock/categories";

export default function CategoriesPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Card>
        <CardContent>
          <Tabs defaultValue="property-types">
            <TabsList>
              <TabsTab value="property-types">Property Types</TabsTab>
              <TabsTab value="amenities">Amenities</TabsTab>
              <TabsTab value="locations">Locations</TabsTab>
            </TabsList>

            <TabsPanel value="property-types" className="flex flex-col gap-4">
              <ListToolbar
                searchPlaceholder="Search property types..."
                action={
                  <Button size="sm">
                    <Plus /> Add Property Type
                  </Button>
                }
              />
              <CategoryGrid items={propertyTypes} icon={Home} />
            </TabsPanel>

            <TabsPanel value="amenities" className="flex flex-col gap-4">
              <ListToolbar
                searchPlaceholder="Search amenities..."
                action={
                  <Button size="sm">
                    <Plus /> Add Amenity
                  </Button>
                }
              />
              <CategoryGrid items={amenities} icon={Sparkles} />
            </TabsPanel>

            <TabsPanel value="locations" className="flex flex-col gap-4">
              <ListToolbar
                searchPlaceholder="Search cities or barangays..."
                action={
                  <Button size="sm">
                    <MapPinned /> Add City
                  </Button>
                }
              />
              <LocationList cities={cityLocations} />
            </TabsPanel>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
