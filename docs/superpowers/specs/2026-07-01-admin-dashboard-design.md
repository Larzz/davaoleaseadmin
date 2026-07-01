# DavaoLease Admin — Dashboard & Shell Design

Date: 2026-07-01

## Goal

Build the shared admin panel shell (sidebar + topbar) for DavaoLease Admin, matching the
visual style of the reference screenshot (a "Listora" property-admin dashboard), and fully
implement the Dashboard (home) page. The other 8 sidebar modules get routes and placeholder
pages so the sidebar is fully navigable, but their real content is out of scope for this pass.

Reference image: `/Users/larryparba/Desktop/39e8dc6f4b019e55621b4955f13df0c0.png`

## Modules (sidebar, from AGENTS.md)

1. Dashboard (Home) — fully built this pass
2. Users (Renters, Agents, Agencies, Admins) — placeholder
3. Listing Approval (Approve, Reject, Flag, Suspend) — placeholder
4. Verification Center (PRC License, Government ID, Broker License, Business Permit) — placeholder
5. Categories (Property Types, Amenities, Locations) — placeholder
6. Blog CMS (Articles, Categories, Tags, SEO) — placeholder
7. Reports (Flagged Listings, Fraud, Spam, Fake Agents) — placeholder
8. Payments (Subscriptions, Featured Badges, Refunds, Invoices) — placeholder
9. Support (Tickets, Live Chat, FAQ Management) — placeholder

## Stack & Setup

- **shadcn/ui** initialized on top of the existing Tailwind v4 setup, neutral base color
  (matches the reference's black/white/gray palette).
- Components used: `sidebar`, `button`, `card`, `badge`, `table`, `input`, `avatar`,
  `dropdown-menu`, `separator`, `chart`.
- **lucide-react** for all icons (sidebar nav icons, stat card icons, table action icon).
- **recharts** (installed as a dependency of shadcn's `chart` component) for the bar chart.
- Light mode only — no dark mode toggle in this pass.
- Branding: sidebar logo text "DavaoLease", topbar search placeholder
  "Search listings, agents, users...", primary topbar button "+ Add Listing".

## Architecture

### Shell

- `app/layout.tsx` (root, Server Component): sets up fonts/globals, wraps the app in
  shadcn's `SidebarProvider`, renders `<AppSidebar />` alongside a topbar + `{children}` as
  the main content area. Every route under `app/` automatically gets this shell — no route
  groups needed since the entire app is the admin panel (no public-facing pages here).
- `components/app-sidebar.tsx` (Client Component — needs `usePathname` for active-route
  highlighting): logo, nav list of the 9 modules with icons, active state styling, and a
  user/log-out footer item, matching the reference's sidebar layout.
- `components/topbar.tsx` (Client Component): page title (derived from the current route),
  a search input, notification/profile icon buttons, and the "+ Add Listing" button.

### Routing

| Route | Module | This pass |
|---|---|---|
| `/` | Dashboard | Fully built |
| `/users` | Users | Placeholder |
| `/listings` | Listing Approval | Placeholder |
| `/verification` | Verification Center | Placeholder |
| `/categories` | Categories | Placeholder |
| `/blog` | Blog CMS | Placeholder |
| `/reports` | Reports | Placeholder |
| `/payments` | Payments | Placeholder |
| `/support` | Support | Placeholder |

Each placeholder route is a one-line `page.tsx` rendering a shared
`components/coming-soon.tsx` component, parameterized with a title and icon, showing a
"This module is coming soon" message. This keeps the sidebar fully clickable now without
building out 8 modules' worth of real UI.

### Dashboard page (`app/page.tsx`)

Server Component, reads static mock data (no client fetching, no backend/API this pass).

1. **Stat cards** — 6 cards in a responsive grid (3-per-row on desktop, wraps on smaller
   screens): Total Listings, Active Agents, Active Agencies, Revenue, Monthly Signups,
   Pending Verifications. Each card shows a label, an icon, a large value, and a small
   delta/caption line (e.g. "12 added this month"), styled like the reference's stat cards.
2. **Recent Listings table** — columns: Property, Location, Price (₱, PHP formatting),
   Status (badge: Active/Pending/Sold, same color mapping as the reference — green/gray/blue),
   Agent, Created date, and a row action (`...` dropdown menu placeholder, no real actions
   wired up). "View All" link in the section header (visual only, no target page this pass).
3. **Recent Activity feed** — list of recent verification/inquiry-style items: name, a status
   badge (e.g. New/Followed Up), timestamp, and a one-line message, styled like the
   reference's "Recent Inquiries" panel.
4. **Monthly Signups bar chart** — bar chart of signups per month (Jan through the current
   month), one bar (current month) visually highlighted, built with shadcn's `chart`
   component wrapping recharts. This is the one Client Component on the page (charts need
   browser rendering), composed into the otherwise-Server-Component dashboard.

All dashboard data (stat card values, listings, activity feed, chart series) lives in a
single typed `lib/mock-data.ts` file, using Davao-flavored placeholder data: barangay names
(e.g. Matina, Buhangin, Talomo, Bangkal) instead of Manhattan/Brooklyn, and PHP currency
instead of USD.

## Out of scope for this pass

- Real content for the 8 non-Dashboard modules (Users, Listing Approval, Verification
  Center, Categories, Blog CMS, Reports, Payments, Support) — placeholder pages only.
- Any backend, database, or API integration — all data is static/mocked.
- Auth/login flow — the shell assumes an already-authenticated admin.
- Dark mode.
- Wiring up real actions (Approve/Reject/Add Listing/search/notifications) — buttons and
  inputs are visually present but non-functional this pass.
