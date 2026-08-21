import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPC Growth & Performance Acquisition Marketing",
  description: "Data-driven performance campaigns across Google, Meta, and LinkedIn with continuous A/B landing page optimization, telemetry tracking, and advanced technical SEO campaigns.",
  keywords: ["Digital Marketing", "PPC Growth", "Google Ads Agency", "Performance Marketing", "Technical SEO", "B2B Lead Generation"],
  openGraph: {
    title: "PPC Growth & Performance Acquisition Marketing | DIGINET",
    description: "Data-driven performance marketing across Google, Meta, and LinkedIn with continuous A/B optimization.",
  },
};

export default function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
