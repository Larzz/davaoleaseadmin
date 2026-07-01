import {
  Building2,
  ClipboardCheck,
  FileText,
  Flag,
  LayoutDashboard,
  MessagesSquare,
  ShieldCheck,
  Tags,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Users", url: "/users", icon: Users },
  { title: "Listing Approval", url: "/listings", icon: ClipboardCheck },
  { title: "Verification Center", url: "/verification", icon: ShieldCheck },
  { title: "Categories", url: "/categories", icon: Tags },
  { title: "Blog CMS", url: "/blog", icon: FileText },
  { title: "Reports", url: "/reports", icon: Flag },
  { title: "Payments", url: "/payments", icon: Wallet },
  { title: "Support", url: "/support", icon: MessagesSquare },
];

export { Building2 };

export function getPageTitle(pathname: string): string {
  const item =
    pathname === "/"
      ? navItems[0]
      : navItems.find((item) => item.url !== "/" && pathname.startsWith(item.url));
  return item?.title ?? "Dashboard";
}
