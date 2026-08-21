import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Global Offices",
  description: "Connect with DIGINET's system engineers and solutions architects. Reach our Global HQ in Singapore or our India branch to discuss your technology initiatives.",
  keywords: ["Contact DIGINET", "DIGINET Singapore Office", "DIGINET India Office", "IT Consultation Booking"],
  openGraph: {
    title: "Contact Us | Global Offices | DIGINET",
    description: "Connect with DIGINET's system engineers and solutions architects in Singapore and India.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
