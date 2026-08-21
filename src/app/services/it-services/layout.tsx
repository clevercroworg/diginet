import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Managed IT Services & Cloud Infrastructure",
  description: "ITIL-aligned managed infrastructure, Active Directory management, SLA backups, cloud migrations, and proactive 24/7 network & desktop support operations.",
  keywords: ["IT Services", "Managed IT", "Cloud Migration", "Disaster Recovery", "SLA Support", "Help Desk Operations"],
  openGraph: {
    title: "Managed IT Services & Cloud Infrastructure | DIGINET",
    description: "ITIL-aligned managed infrastructure, Active Directory management, SLA backups, and proactive support.",
  },
};

export default function ITServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
