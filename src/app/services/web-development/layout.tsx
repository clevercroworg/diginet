import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Web Development & Cloud Platforms",
  description: "High-conversion web platforms featuring Server-Side Rendering (SSR), Headless CMS API connections, edge performance optimizations, and guaranteed 95+ PageSpeed scores.",
  keywords: ["Web Development", "Next.js Development", "Full Stack Engineering", "Headless CMS", "Enterprise Web Apps"],
  openGraph: {
    title: "Custom Web Development & Cloud Platforms | DIGINET",
    description: "High-conversion web platforms featuring SSR, headless CMS API connections, and edge optimizations.",
  },
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
