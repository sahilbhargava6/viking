export default function TickerBar() {
  const itemsForward = [
    "A VIKING GROUP COMPANY SINCE 1969",
    "DOMESTIC SHIPMENT IN 24 HOURS",
    "INTERNATIONAL SHIPMENT IN 7 DAYS",
    "DEALER KNOWLEDGE, EPC SOFTWARE & AI SUPPORT",
    "TRUCKS • BUSES • CONSTRUCTION & MINING • MARINE",
    "MAN • MERCEDES-BENZ • SCANIA • VOLVO",
    "BREMSKERL BRAKE TECHNOLOGY",
    "24 MONTHS WARRANTY ON NEW PARTS",
    "TESTED DISMANTLED TRUCK & BUS ASSEMBLIES",
    "KHALAPUR CENTRAL DEPOT & MUMBAI SHOWROOM",
  ];

  const itemsReverse = [
    "ZERO COMPROMISE COMMERCIAL ENDURANCE",
    "15,000+ EUROPEAN LINE ITEMS IN STOCK",
    "VOLVO B7R / B9R / B11R / 9400 / 9600 COACHES",
    "ACTROS MP3 / MP4 • SCANIA V8 • MAN TGX",
    "OFFICIAL DEALER EPC LOOKUP (IMPACT • EPC • MULTI • MANTIS)",
    "PAN-INDIA EXPRESS & GLOBAL AIR/CONTAINER FREIGHT",
    "VIKING TRADELINKS",
  ];

  return (
    <>
      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[...itemsForward, ...itemsForward].map((item, idx) => (
            <span key={idx} className="ticker__item">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="ticker ticker--reverse ticker--safety" aria-hidden="true">
        <div className="ticker__track">
          {[...itemsReverse, ...itemsReverse].map((item, idx) => (
            <span key={idx} className="ticker__item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
