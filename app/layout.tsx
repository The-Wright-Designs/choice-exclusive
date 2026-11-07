import type { Metadata } from "next";

import { DM_Sans, Cormorant_Garamond } from "next/font/google";

const dmSansSerif = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const cormorantSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-cormorant",
});

import "@/_styles/globals.css";
import HeaderComponent from "@/_components/navigation/header-component";

export const metadata: Metadata = {
  metadataBase: new URL("https://exclusive.choicenet.co.za"),
  title: "Choice Property Group",
  description:
    "Choice Property Group offers exclusive property listings and professional real estate services.",
  keywords: [
    "Choice Property Group",
    "Choice Exclusive",
    "exclusive property listings",
    "real estate",
    "property for sale",
    "property for rent",
    "estate agents",
    "property management",
    "buy a home",
    "sell your property",
    "residential property",
    "South Africa property",
  ],
  openGraph: {
    description:
      "Choice Property Group offers exclusive property listings and professional real estate services.",
    type: "website",
    locale: "en_ZA",
    siteName: "Choice Property Group",
    images: [
      {
        url: "/open-graph-image.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Choice Property Group",
    url: "https://exclusive.choicenet.co.za",
  };
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${dmSansSerif.className} ${cormorantSerif.variable} antialiased`}
      >
        <HeaderComponent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
