import { TELEMETRY_FEED } from "@/data/partsData";

export default function TelemetryBar() {
  return (
    <div className="log" aria-label="Warehouse & Logistics Telemetry Feed">
      <div className="log__header">
        <div className="log__header-title">
          <span>LIVE WAREHOUSE DISPATCH & TELEMETRY STREAM</span>
        </div>
        <div className="log__header-status">
          NETWORK ID: VK-MUM-KHL-IST // ENCRYPTED TRACE
        </div>
      </div>
      <div className="log__body">
        <div className="log__track">
          {[...TELEMETRY_FEED, ...TELEMETRY_FEED].map((entry, idx) => (
            <div key={`track1-${idx}`} className="log__entry">
              <span className="log__entry-time">{entry.time}</span>
              <span className={`log__entry-tag log-${entry.status}`}>{entry.tag}</span>
              <span className="log__entry-msg">{entry.msg}</span>
            </div>
          ))}
        </div>
        <div className="log__track log__track--reverse">
          {[...TELEMETRY_FEED, ...TELEMETRY_FEED].reverse().map((entry, idx) => (
            <div key={`track2-${idx}`} className="log__entry">
              <span className="log__entry-time">{entry.time}</span>
              <span className={`log__entry-tag log-${entry.status}`}>{entry.tag}</span>
              <span className="log__entry-msg">{entry.msg}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
