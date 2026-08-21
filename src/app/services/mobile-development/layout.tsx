import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Native & Hybrid Mobile App Development",
  description: "Custom iOS and Android mobile applications engineered with Swift, Kotlin, React Native, and Flutter featuring biometric security, real-time push, and offline sync.",
  keywords: ["Mobile App Development", "iOS App Development", "Android App Development", "React Native", "Flutter SDK"],
  openGraph: {
    title: "Native & Hybrid Mobile App Development | DIGINET",
    description: "Custom iOS and Android applications engineered with native biometrics and offline sync.",
  },
};

export default function MobileDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
