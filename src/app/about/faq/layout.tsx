import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ)",
  description: "Find clear answers to common questions about DIGINET's IT consulting models, cybersecurity audits, web engineering timelines, and ongoing support SLAs.",
  keywords: ["DIGINET FAQ", "IT Services Questions", "Cybersecurity FAQ", "Consulting FAQ"],
  openGraph: {
    title: "Frequently Asked Questions (FAQ) | DIGINET",
    description: "Find clear answers to common questions about DIGINET's IT consulting models, cybersecurity audits, and support SLAs.",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
