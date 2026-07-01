import { FileText } from "lucide-react";

import { ComingSoon } from "@/components/coming-soon";

export default function BlogCmsPage() {
  return (
    <ComingSoon
      title="Blog CMS"
      description="Manage articles, categories, tags, and SEO."
      icon={FileText}
    />
  );
}
