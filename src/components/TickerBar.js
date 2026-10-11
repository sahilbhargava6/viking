export default function TickerBar() {
  const itemsForward = [
    "EUROPEAN TRUCK SPECIALIST SINCE 1972",
    "MAN • MERCEDES-BENZ • SCANIA • VOLVO",
    "BREMSKERL BRAKE TECHNOLOGY",
    "24-HOUR WORLDWIDE DISPATCH",
    "24 MONTHS WARRANTY ON NEW PARTS",
    "TESTED DISMANTLED ASSEMBLIES",
    "KHALAPUR CENTRAL WAREHOUSE",
    "ISTANBUL SOURCING HUB",
  ];

  const itemsReverse = [
    "ZERO COMPROMISE COMMERCIAL ENDURANCE",
    "15,000+ LINE ITEMS IN STOCK",
    "HEAVY DUTY CALIPERS & AIR SPRINGS",
    "TURBOCHARGERS & DRIVETRAIN ENGINES",
    "PAN-INDIA EXPRESS LOGISTICS",
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
          {[...itemsReverse, ...itemsReverse, ...itemsReverse].map((item, idx) => (
            <span key={idx} className="ticker__item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
