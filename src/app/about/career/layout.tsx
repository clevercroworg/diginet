import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Opportunities",
  description: "Explore open career opportunities at DIGINET. Join an elite team of software engineers, cybersecurity analysts, solutions architects, and digital marketing leaders.",
  keywords: ["DIGINET Careers", "Tech Jobs Singapore", "Cybersecurity Careers", "Software Engineering Jobs India", "IT Consulting Careers"],
  openGraph: {
    title: "Careers & Opportunities | DIGINET",
    description: "Explore open career opportunities at DIGINET across Singapore and India.",
  },
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
