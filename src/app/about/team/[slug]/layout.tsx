import type { Metadata } from "next";
import { getTeamMemberBySlug } from "@/data/team";

interface LayoutProps {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const member = getTeamMemberBySlug(resolvedParams.slug);

  if (!member) {
    return {
      title: "Leadership Team Member",
      description: "Executive leadership profile at DIGINET.",
    };
  }

  return {
    title: `${member.name} - ${member.role}`,
    description: member.shortBio,
    keywords: [member.name, member.role, "DIGINET Leadership", ...member.skills],
    openGraph: {
      title: `${member.name} - ${member.role} | DIGINET`,
      description: member.shortBio,
      images: [
        {
          url: member.image,
          alt: member.name,
        },
      ],
    },
  };
}

export default function TeamMemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
