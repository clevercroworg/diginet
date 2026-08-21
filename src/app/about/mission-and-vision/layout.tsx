import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission & Vision",
  description: "Discover DIGINET's mission, corporate ethos, and forward-looking vision for architecting resilient digital platforms and zero-trust security.",
  keywords: ["DIGINET Mission", "Corporate Vision", "Core Values", "Enterprise Tech Vision"],
  openGraph: {
    title: "Mission & Vision | DIGINET",
    description: "Discover DIGINET's mission, corporate ethos, and forward-looking vision for architecting resilient digital platforms.",
  },
};

export default function MissionAndVisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
