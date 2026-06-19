import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFab from "@/components/layout/WhatsAppFab";
import PageTransition from "@/components/ui/PageTransition";
import JsonLd from "@/components/ui/JsonLd";
import { BUSINESS } from "@/lib/business";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS.name} | Premium Poly Bags Manufacturer in Karachi`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: BUSINESS.description,
  keywords: [
    "Poly Bags manufacturer Karachi",
    "polythene bags Pakistan",
    "plastic bags manufacturer",
    "printed bags Karachi",
    "industrial liners Pakistan",
    "HDPE bags supplier",
    "LDPE bags manufacturer",
    "Poly Bags wholesale Pakistan",
    "packaging solutions Karachi",
    "custom printed bags",
    "HD bags supplier",
    "food grade packaging Pakistan",
  ],
  metadataBase: new URL("https://shayanpackages.com"),
  openGraph: {
    title: `${BUSINESS.name} | Premium Poly Bags Manufacturer in Karachi`,
    description: BUSINESS.description,
    url: "https://shayanpackages.com",
    siteName: BUSINESS.name,
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: BUSINESS.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} | Premium Poly Bags Manufacturer`,
    description: BUSINESS.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://shayanpackages.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,0..1&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
