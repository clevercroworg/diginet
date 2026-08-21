import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookingProvider } from "@/context/BookingContext";
import ClientChatbot from "@/components/ClientChatbot";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "DIGINET | Corporate IT Solutions & Digital Services",
    template: "%s | DIGINET",
  },
  description: "DIGINET is a premier global IT consulting and digital marketing agency offering high-end cybersecurity, custom web development, mobile app engineering, and cloud infrastructure.",
  keywords: [
    "DIGINET",
    "IT Solutions",
    "Digital Marketing",
    "Cybersecurity",
    "Web Development",
    "Mobile App Development",
    "IT Services Singapore",
    "IT Consultancy",
    "Zero Trust Security"
  ],
  metadataBase: new URL("https://www.diginet.sg"),
  openGraph: {
    title: "DIGINET | Corporate IT Solutions & Digital Services",
    description: "Premier global technology consulting and digital growth agency delivering enterprise cybersecurity, web architecture, and application development.",
    url: "https://www.diginet.sg",
    siteName: "DIGINET",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-light text-text-primary">
        <BookingProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ClientChatbot />
        </BookingProvider>
      </body>
    </html>
  );
}
