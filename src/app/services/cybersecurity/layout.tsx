import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity & Zero-Trust Engineering",
  description: "Enterprise zero-trust architecture, cloud firewall configuration, micro-segmentation, active threat isolation, and rigorous penetration audits aligning with GDPR and DPDPA.",
  keywords: ["Cybersecurity", "Zero Trust Architecture", "SOC Delivery", "Penetration Testing", "Threat Intelligence", "Firewall Configuration"],
  openGraph: {
    title: "Cybersecurity & Zero-Trust Engineering | DIGINET",
    description: "Enterprise zero-trust architecture, cloud firewall configuration, and rigorous compliance penetration audits.",
  },
};

export default function CybersecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
