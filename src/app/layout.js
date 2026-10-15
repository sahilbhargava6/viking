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

export const metadata = {
  title: "VIKING TRADELINKS — European Commercial Spare Parts (Viking Group Since 1969)",
  description:
    "A Viking Group Company Since 1969. Specialist suppliers for Trucks, Buses, Mining & Marine (MAN, Mercedes-Benz, Scania & Volvo). Domestic dispatch in 24 hours across India, international delivery in 7 days.",
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
  openGraph: {
    title: "VIKING TRADELINKS — European Commercial Parts (Viking Group Since 1969)",
    description:
      "A Viking Group Company Since 1969. Specialist suppliers for Trucks, Buses, Construction & Mining, and Marine. Domestic 24h & International 7d dispatch.",
    url: "https://vikingeuroparts.com",
    siteName: "Viking Tradelinks",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
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
