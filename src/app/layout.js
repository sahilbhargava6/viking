import { Suspense } from "react";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { RfqProvider } from "@/context/RfqContext";
import RfqDrawer from "@/components/RfqDrawer";

import FloatingConsulting from "@/components/FloatingConsulting";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://vikingeuroparts.com"),
  title: "VIKING TRADELINKS — European Commercial Spare Parts (Viking Group Since 1969)",
  description:
    "A Viking Group Company Since 1969. Specialist suppliers for Trucks, Buses, Mining & Marine (MAN, Mercedes-Benz, Scania & Volvo). Domestic dispatch in 24 hours across India, international delivery in 7 days.",
  applicationName: "Viking Tradelinks",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Viking Tradelinks",
    "Viking Group Since 1969",
    "European truck parts",
    "European bus parts",
    "Volvo bus parts B7R B9R B11R 9400",
    "MAN truck spare parts",
    "Mercedes Actros parts",
    "Scania truck parts",
    "Volvo FH FM FMX parts",
    "Mining truck parts",
    "Marine diesel parts",
    "Bremskerl brake pads",
    "truck brake discs",
    "Mumbai truck parts",
    "Khalapur warehouse",
  ],
  authors: [{ name: "Viking Tradelinks (Viking Group)" }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "VIKING TRADELINKS — European Commercial Parts (Viking Group Since 1969)",
    description:
      "A Viking Group Company Since 1969. Specialist suppliers for Trucks, Buses, Construction & Mining, and Marine. Domestic 24h & International 7d dispatch.",
    url: "https://vikingeuroparts.com",
    siteName: "Viking Tradelinks",
    images: [
      {
        url: "/images/logo.png",
        width: 1024,
        height: 1024,
        alt: "Viking Tradelinks Official Emblem",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIKING TRADELINKS — European Commercial Spare Parts Since 1969",
    description:
      "Volvo, MAN, Mercedes-Benz, Scania commercial fleet spare parts. 24h domestic & 7d international dispatch.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  "@id": "https://vikingeuroparts.com/#organization",
  name: "Viking Tradelinks",
  legalName: "Viking Tradelinks (A Viking Group Company Since 1969)",
  url: "https://vikingeuroparts.com",
  logo: "https://vikingeuroparts.com/images/logo.png",
  image: "https://vikingeuroparts.com/images/hero-banner.jpeg",
  foundingDate: "1969",
  description:
    "European commercial vehicle specialist supplying OEM & certified dismantled parts for MAN, Mercedes-Benz, Scania & Volvo trucks, luxury buses, mining equipment, and marine propulsion since 1969.",
  telephone: "+919702666664",
  email: "schumi.india@mail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "36-A, 1st Bhatwadi, Girgaon",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400004",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "18.9553",
    longitude: "72.8205",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "INR, USD, EUR, AED",
  paymentAccepted: "Cash, Credit Card, Wire Transfer, NEFT, RTGS",
  areaServed: [
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "Saudi Arabia" },
    { "@type": "Country", "name": "Kenya" },
    { "@type": "Country", "name": "South Africa" },
  ],
  sameAs: ["https://wa.me/919702666664"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://vikingeuroparts.com/#website",
  url: "https://vikingeuroparts.com",
  name: "VIKING TRADELINKS",
  description: "European Commercial Spare Parts Portal — Viking Group Since 1969",
  publisher: {
    "@id": "https://vikingeuroparts.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://vikingeuroparts.com/parts?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <RfqProvider>
          <Suspense fallback={<div style={{ height: "90px" }} />}>
            <Header />
          </Suspense>
          <main>{children}</main>
          <Footer />
          <WhatsAppWidget />
          <FloatingConsulting />
          <RfqDrawer />
        </RfqProvider>
      </body>
    </html>
  );
}
