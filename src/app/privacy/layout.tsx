import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read DIGINET's Privacy Policy to understand how we collect, safeguard, and process corporate data in accordance with GDPR, PDPA, and global privacy standards.",
  keywords: ["DIGINET Privacy Policy", "Data Protection", "GDPR Compliance", "PDPA Compliance"],
  openGraph: {
    title: "Privacy Policy | DIGINET",
    description: "Read DIGINET's Privacy Policy regarding data protection, telemetry, and privacy compliance.",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
