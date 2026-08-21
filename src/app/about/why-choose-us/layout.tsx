import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description: "Discover why global enterprises and fast-growing organizations partner with DIGINET for mission-critical software engineering, cybersecurity, and SLA guarantees.",
  keywords: ["Why Choose DIGINET", "IT Partner Benefits", "Enterprise Reliability", "Cybersecurity Expertise"],
  openGraph: {
    title: "Why Choose Us | DIGINET",
    description: "Discover why global enterprises partner with DIGINET for mission-critical software engineering, cybersecurity, and SLA guarantees.",
  },
};

export default function WhyChooseUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
