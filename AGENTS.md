<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project: DavaoLease Admin

This is the admin panel for **DavaoLease**, a property rental/leasing marketplace. It is used by DavaoLease staff (not end renters/agents) to operate the platform.

## Modules

- **8.1 Dashboard (Home)** — Total Listings, Active Agents, Active Agencies, Revenue, Monthly Signups, Pending Verifications
- **8.2 Users** — Manage Renters, Agents, Agencies, Admins
- **8.3 Listing Approval** — Approve, Reject, Flag, Suspend
- **8.4 Verification Center** — Verify PRC License, Government ID, Broker License, Business Permit
- **8.5 Categories** — Manage Property Types, Amenities, Locations (Cities, Barangays)
- **8.6 Blog CMS** — Articles, Categories, Tags, SEO
- **8.7 Reports** — Flagged Listings, Fraud, Spam, Fake Agents
- **8.8 Payments** — Subscriptions, Featured Listing Badges, Refunds, Invoices
- **8.9 Support** — Tickets, Live Chat, FAQ Management

When building any of these modules, keep them scoped to admin/staff operations (not the public-facing renter/agent site).
