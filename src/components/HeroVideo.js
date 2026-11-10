"use client";

import { useEffect, useRef } from "react";
import { preload } from "react-dom";

const POSTER = "/videos/hero-poster.webp";

export default function HeroVideo() {
  // The poster is the first thing seen in the hero: fetch it with high priority.
  preload(POSTER, { as: "image", fetchPriority: "high" });
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // Respect users who ask the OS for reduced motion: keep the still poster.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Respect data-saver mode: keep the poster.
    if (navigator.connection?.saveData) return;

    const start = () => {
      // Phones get the lighter 720p encode; everything else the 1080p one.
      const small = window.matchMedia("(max-width: 900px)").matches;
      v.src = small ? "/videos/hero-720.mp4" : "/videos/hero-1080.mp4";
      v.play().catch(() => {
        /* Autoplay blocked (e.g. low-power mode): the poster stays visible. */
      });
    };

    // Wait until the page has finished loading so the video does not compete
    // with fonts, images and scripts; the poster covers the gap.
    if (document.readyState === "complete") {
      start();
      return;
    }
    window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  return (
    <div className="hero__media" aria-hidden="true">
      <video
        ref={videoRef}
        className="hero__video"
        poster={POSTER}
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        tabIndex={-1}
      />
      <div className="hero__media-overlay" />
    </div>
  );
}
