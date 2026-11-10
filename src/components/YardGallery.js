"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const PHOTOS = [
  { src: "container-crane-loading", caption: "Crane loading a 40ft Maersk container at the yard", wide: true },
  { src: "volvo-cab-in-container", caption: "Volvo cab secured and lashed inside a container" },
  { src: "volvo-engine-in-container", caption: "Volvo engine strapped down for sea freight" },
  { src: "engine-stock-floor", caption: "Engine and axle stock staged on the warehouse floor", wide: true },
  { src: "cab-craned-into-container", caption: "Truck cab craned into an open-top container" },
  { src: "maersk-container-engines", caption: "Engines loaded into a Maersk container" },
  { src: "engines-strapped-trailer", caption: "Engines ratchet-strapped on a trailer" },
  { src: "volvo-engines-warehouse", caption: "Volvo engines in stock at the warehouse", wide: true },
  { src: "radiator-loading", caption: "Radiator assembly being loaded" },
  { src: "cab-loading-crew", caption: "Loading crew guiding a cab into place" },
  { src: "container-loading-dusk", caption: "Evening loading of an outbound container", wide: true },
  { src: "trailer-engines-radiators", caption: "Engines and radiators on an outbound trailer" },
  { src: "radiator-in-container", caption: "Radiator packed at the container door" },
  { src: "container-trailer-dock", caption: "Loaded container at the dispatch dock", wide: true },
  { src: "engine-rows-warehouse", caption: "Rows of engines ready for dispatch" },
  { src: "yard-trailers-crane", caption: "Trailers lined up in the loading yard" },
  { src: "container-trailer-dusk", caption: "Container trailer ready to leave the yard", wide: true },
];

export default function YardGallery() {
  const [active, setActive] = useState(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir) => setActive((i) => (i === null ? i : (i + dir + PHOTOS.length) % PHOTOS.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  const current = active === null ? null : PHOTOS[active];

  return (
    <>
      <div className="yard-gallery">
        {PHOTOS.map((p, i) => (
          <button
            key={p.src}
            type="button"
            className={`yard-gallery__item${p.wide ? " yard-gallery__item--wide" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Open photo: ${p.caption}`}
          >
            <Image
              src={`/images/yard/${p.src}.webp`}
              alt={p.caption}
              fill
              sizes={p.wide ? "(max-width: 700px) 100vw, 50vw" : "(max-width: 700px) 50vw, 25vw"}
              style={{ objectFit: "cover" }}
            />
            <span className="yard-gallery__caption">{p.caption}</span>
          </button>
        ))}
      </div>

      {current && (
        <div className="yard-lightbox" role="dialog" aria-modal="true" aria-label={current.caption} onClick={close}>
          <div className="yard-lightbox__bar" onClick={(e) => e.stopPropagation()}>
            <span>
              {String(active + 1).padStart(2, "0")} / {String(PHOTOS.length).padStart(2, "0")}
            </span>
            <button type="button" onClick={close} aria-label="Close">✕</button>
          </div>
          <figure className="yard-lightbox__figure" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async" src={`/images/yard/${current.src}.webp`} alt={current.caption} />
            <figcaption>{current.caption}</figcaption>
          </figure>
          <button
            type="button"
            className="yard-lightbox__nav yard-lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous photo"
          >
            ←
          </button>
          <button
            type="button"
            className="yard-lightbox__nav yard-lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next photo"
          >
            →
          </button>
        </div>
      )}
    </>
  );
}
