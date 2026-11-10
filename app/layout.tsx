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
import FooterComponent from "@/_components/navigation/footer-component";

const title =
  "Mountain Rose | 155Ha Hemel-en-Aarde Valley Farm for Sale, Hermanus";
const description =
  "Mountain Rose is a 155Ha farm in the Hemel-en-Aarde Valley near Hermanus, Western Cape, with 40Ha of arable land, 115Ha of conservation land, water rights and ocean views. On the market for the first time in nearly 50 years.";

export const metadata: Metadata = {
  metadataBase: new URL("https://exclusive.choicenet.co.za"),
  title,
  description,
  keywords: [
    "Mountain Rose",
    "Hemel-en-Aarde farm for sale",
    "Hemel-en-Aarde Valley",
    "Hermanus farm for sale",
    "wine farm for sale",
    "vineyard land",
    "luxury farm South Africa",
    "Western Cape farm for sale",
    "conservation land",
    "Fernkloof Nature Reserve",
    "Overstrand Municipality",
    "Choice Property Group",
    "Choice Exclusive",
    "exclusive property listings",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
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
        <FooterComponent />
      </body>
    </html>
  );
}
