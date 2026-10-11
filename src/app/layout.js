import { Suspense } from "react";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { RfqProvider } from "@/context/RfqContext";
import RfqDrawer from "@/components/RfqDrawer";

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
  title: "VIKING TRADELINKS — Heavy European Truck Spare Parts Since 1972",
  description:
    "Specialist suppliers for MAN, Mercedes-Benz, Scania & Volvo trucks. New OEM alternatives and certified dismantled parts. 24-hour dispatch worldwide and across India.",
  keywords: [
    "Viking Tradelinks",
    "Viking Europarts",
    "European truck parts",
    "MAN truck spare parts",
    "Mercedes Actros parts",
    "Scania truck parts",
    "Volvo FH FM parts",
    "Bremskerl brake pads",
    "truck brake discs",
    "truck air springs",
    "Mumbai truck parts",
    "Khalapur warehouse",
  ],
  authors: [{ name: "V Stores & Services / Viking Tradelinks" }],
  openGraph: {
    title: "VIKING TRADELINKS — Heavy European Truck Spare Parts Since 1972",
    description:
      "Specialist suppliers for MAN, Mercedes-Benz, Scania & Volvo heavy commercial vehicles. 24-hour dispatch, 24-month warranty on new parts.",
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
          <RfqDrawer />
        </RfqProvider>
      </body>
    </html>
  );
}
