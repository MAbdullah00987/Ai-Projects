"use client";
import React, { useState, useEffect, useRef } from "react";

const roles = [
  "Performing Artist",
  "Founder-Builder",
  "Muhammad Abdullah",
  "Product Designer",
  "Design Engineer",
];

const trailImages = [
  "https://www.jingjinghan.com/images/cs/first-mover/00-1gxmw8jD2K7expU4lIEX7iJjY04.png",
  "https://www.jingjinghan.com/images/sw-fosterhealth.png",
  "https://www.jingjinghan.com/images/sw-crypto.png",
  "https://www.jingjinghan.com/images/sw-salona.png",
  "https://www.jingjinghan.com/images/work-T1wIJ.jpg",
  "https://www.jingjinghan.com/images/Cave.png"
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Typewriter effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      if (displayText === "") {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 500); // pause before typing
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        }, 50); // deleting speed
      }
    } else {
      if (displayText === currentRole) {
        timeout = setTimeout(() => setIsDeleting(true), 2000); // pause at end
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }, 100); // typing speed
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Mouse Trail effect
  const [trail, setTrail] = useState<{ id: number; x: number; y: number; img: string }[]>([]);
  const trailIdRef = useRef(0);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const distance = Math.hypot(e.clientX - lastMousePos.current.x, e.clientY - lastMousePos.current.y);
      if (distance > 60) {
        lastMousePos.current = { x: e.clientX, y: e.clientY };
        const newTrail = {
          id: trailIdRef.current++,
          x: e.clientX,
          y: e.clientY,
          img: trailImages[trailIdRef.current % trailImages.length]
        };
        
        setTrail((prev) => [...prev, newTrail].slice(-20)); // keep last 20
        
        // Remove after animation (1s)
        setTimeout(() => {
          setTrail((prev) => prev.filter((t) => t.id !== newTrail.id));
        }, 1000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center" style={{ background: "var(--hero-bg)" }}>
      {/* Background canvas for interactive effects */}
      <div style={{ zIndex: 5 }} className="pointer-events-none absolute inset-0 overflow-hidden">
        {trail.map((t) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={t.id}
            src={t.img}
            alt=""
            aria-hidden="true"
            className="absolute h-[170px] w-[245px] object-cover will-change-transform rounded-md opacity-0"
            style={{
              left: t.x - 122,
              top: t.y - 85,
              animation: "trailFadeOut 1s forwards cubic-bezier(0.2, 0, 0, 1)"
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 mt-24 flex flex-col items-center">
        <h1 className="hero-name font-blinker text-[clamp(34px,8vw,128px)] font-normal leading-[0.9] tracking-[0.01em] whitespace-nowrap text-white will-change-transform">
          <span className="hero-word inline-block will-change-transform">
            {displayText}
            <span style={{ opacity: showCursor ? 1 : 0 }} className="font-light ml-1">|</span>
          </span>
        </h1>
        
        <p className="hero-fade font-sulphur mt-20 md:mt-40 max-w-[620px] text-balance text-[clamp(15px,1.5vw,19px)] leading-relaxed tracking-tight text-white/80 animate-in fade-in duration-1000 delay-500 fill-mode-both">
          New York based product designer who loves beautiful things and blends creativity, technology, and a little vibe-coding into every build.
        </p>
      </div>

      <div className="hero-fade absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="font-gilroy text-[10px] uppercase tracking-[0.35em] text-white/40">Scroll</span>
        <span className="relative block h-10 w-px overflow-hidden bg-white/15">
          <span className="hero-scroll-line absolute inset-x-0 top-0 block h-4 w-px bg-[var(--accent)] animate-pulse" />
        </span>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes trailFadeOut {
          0% { opacity: 0.8; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.9); }
        }
      `}} />
    </section>
  );
}
