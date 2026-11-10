"use client";

import { useEffect, useRef } from "react";

const POSTER = "/videos/hero-poster.webp";

export default function HeroVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // Respect users who ask the OS for reduced motion: keep the still poster.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Phones get the lighter 720p encode; everything else the 1080p one.
    const small = window.matchMedia("(max-width: 900px)").matches;
    v.src = small ? "/videos/hero-720.mp4" : "/videos/hero-1080.mp4";
    v.play().catch(() => {
      /* Autoplay blocked (e.g. low-power mode): the poster stays visible. */
    });
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
