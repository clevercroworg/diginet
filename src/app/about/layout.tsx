import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Company Overview",
  description: "Learn about DIGINET's journey, executive leadership team, engineering values, and our commitment to enterprise cybersecurity, web architecture, and digital growth.",
  keywords: ["About DIGINET", "Executive Leadership", "IT Company Singapore", "Cybersecurity Agency", "Enterprise Tech Consulting"],
  openGraph: {
    title: "About Us | Company Overview | DIGINET",
    description: "Learn about DIGINET's journey, executive leadership team, engineering values, and corporate technology capabilities.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
