import { Eye, FileEdit, Plus, Tags } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { StatCardView } from "@/components/dashboard/stat-card";
import { ListToolbar } from "@/components/shared/list-toolbar";
import { ArticleTable } from "@/components/blog/article-table";
import { TaxonomyTable } from "@/components/blog/taxonomy-table";
import { blogStatCards, articles, blogCategories, blogTags } from "@/lib/mock/blog";

const statIcons = [FileEdit, FileEdit, Tags, Eye];

export default function BlogCmsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {blogStatCards.map((stat, i) => (
          <StatCardView key={stat.label} {...stat} icon={statIcons[i]} />
        ))}
      </div>

      <Card>
        <CardContent>
          <Tabs defaultValue="articles">
            <TabsList>
              <TabsTab value="articles">Articles</TabsTab>
              <TabsTab value="categories">Categories</TabsTab>
              <TabsTab value="tags">Tags</TabsTab>
            </TabsList>

            <TabsPanel value="articles" className="flex flex-col gap-4">
              <ListToolbar
                searchPlaceholder="Search articles..."
                action={
                  <Button size="sm">
                    <Plus /> New Article
                  </Button>
                }
              />
              <ArticleTable articles={articles} />
            </TabsPanel>

            <TabsPanel value="categories" className="flex flex-col gap-4">
              <ListToolbar
                searchPlaceholder="Search categories..."
                action={
                  <Button size="sm">
                    <Plus /> Add Category
                  </Button>
                }
              />
              <TaxonomyTable items={blogCategories} nameLabel="Category" />
            </TabsPanel>

            <TabsPanel value="tags" className="flex flex-col gap-4">
              <ListToolbar
                searchPlaceholder="Search tags..."
                action={
                  <Button size="sm">
                    <Plus /> Add Tag
                  </Button>
                }
              />
              <TaxonomyTable items={blogTags} nameLabel="Tag" />
            </TabsPanel>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
