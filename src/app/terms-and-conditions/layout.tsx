import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Review DIGINET's Terms and Conditions outlining client service agreements, SLAs, software IP policies, and liability frameworks.",
  keywords: ["DIGINET Terms and Conditions", "Service Level Agreement", "Terms of Service"],
  openGraph: {
    title: "Terms & Conditions | DIGINET",
    description: "Review DIGINET's Terms and Conditions outlining client service agreements, SLAs, and usage terms.",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
