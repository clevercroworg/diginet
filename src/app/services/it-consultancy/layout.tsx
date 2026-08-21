import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic IT Consultancy & Tech Roadmaps",
  description: "Strategic advisory, system architecture designs, microservices migrations, compliance audits, and custom software consulting roadmap layouts.",
  keywords: ["IT Consultancy", "Virtual CTO", "Enterprise Architecture", "Technology Roadmaps", "Digital Transformation"],
  openGraph: {
    title: "Strategic IT Consultancy & Tech Roadmaps | DIGINET",
    description: "Strategic advisory, system architecture designs, microservices migrations, and compliance audits.",
  },
};

export default function ITConsultancyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
