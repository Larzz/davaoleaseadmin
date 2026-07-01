import { Tags } from "lucide-react";

import { ComingSoon } from "@/components/coming-soon";

export default function CategoriesPage() {
  return (
    <ComingSoon
      title="Categories"
      description="Manage property types, amenities, and locations (cities, barangays)."
      icon={Tags}
    />
  );
}
