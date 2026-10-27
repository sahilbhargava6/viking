export default function manifest() {
  return {
    name: "VIKING TRADELINKS — European Commercial Vehicle Spare Parts",
    short_name: "Viking Spares",
    description:
      "A Viking Group Company Since 1969. Specialist supplier for Volvo, MAN, Mercedes-Benz, Scania & EV Commercial Fleet spare parts.",
    start_url: "/",
    display: "standalone",
    background_color: "#EEF2F6",
    theme_color: "#7A1528",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable any",
      },
    ],
    categories: ["business", "productivity", "utilities"],
  };
}
