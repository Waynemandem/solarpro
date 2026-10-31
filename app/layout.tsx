import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BrandingProvider } from "@/components/branding/BrandingProvider";
import BusinessNameModal from "@/components/branding/BusinessNameModal";

export const metadata: Metadata = {
  title: "Solar Website Demo | Solar Energy Solutions",
  description:
    "Explore a sample solar product website and preview it with your business name.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <BrandingProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BusinessNameModal />
        </BrandingProvider>
      </body>
    </html>
  );
}