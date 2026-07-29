"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const playgroundItems = [
  {
    title: "Nook",
    desc: "An inspiration archive for creatives to save, organize, and revisit references in a more immersive way.",
    tags: ["Creative Tool", "Chrome Extension"],
    img: "https://www.jingjinghan.com/images/cs/Nook/Nook_Cover.png",
    link: "/playground/nook"
  },
  {
    title: "Remake Tools",
    desc: "A creative-stack web app that helps makers assemble, remix, and ship their toolkit.",
    tags: ["Web App", "Creative Stack"],
    img: "https://www.jingjinghan.com/images/web-6r1cr.png",
    link: "/playground/remake-tools"
  },
  {
    title: "Balancé",
    desc: "A mobile-first ballet learning app designed to help dancers practice technique, track progress, and build consistency outside the studio.",
    tags: ["Mobile App", "Ballet"],
    img: "https://www.jingjinghan.com/images/cs/Balanc%C3%A9/Balanc%C3%A9_Cover.png",
    link: "/playground/balance"
  }
];

export default function Playground() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  
  // Track vertical scroll progress of the target section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll progress to horizontal translation
  // It moves left by 100% of its width, but then shifts back right by 100vw to ensure the last item is perfectly on screen
  const x = useTransform(scrollYProgress, (pos) => `calc(${pos * -100}% + ${pos * 100}vw)`);

  useEffect(() => {
    const updateMedia = () => setIsDesktop(window.innerWidth >= 768);
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <section 
      ref={targetRef} 
      id="playground" 
      className="relative bg-[#0a0a0a] text-white md:h-[300vh]"
    >
      <div className="md:sticky md:top-0 md:h-screen md:overflow-hidden md:flex md:items-center">
        <motion.div 
          style={{ x: isDesktop ? x : 0 }}
          className="flex w-full flex-col gap-16 py-20 md:w-max md:flex-row md:flex-nowrap md:items-stretch md:gap-0 md:py-0 md:h-screen"
        >
          {/* Intro Section */}
          <div id="play-0" className="flex w-full shrink-0 flex-col justify-center px-6 md:h-full md:w-[46vw] md:pr-16 md:pl-[calc(max((100vw-1354px)/2,0px)+2.5rem)]">
            <p className="font-gilroy mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-white/50">
              <span className="dot-loop h-2 w-2 rounded-full bg-green-500"></span>Since 2024
            </p>
            <h2 className="font-blinker text-[clamp(40px,8vw,80px)] leading-[0.9] tracking-[-0.03em]">
              Playground
            </h2>
            <p className="font-sulphur mt-6 max-w-[420px] text-[clamp(18px,2.2vw,26px)] leading-snug tracking-tight text-white/70">
              A space for self-initiated products, prototypes, and creative systems shaped by curiosity, code, and fast iteration.
            </p>
            <span className="font-gilroy mt-10 hidden text-sm uppercase tracking-[0.2em] text-white/40 md:block">
              Scroll →
            </span>
          </div>

          {/* Cards */}
          {playgroundItems.map((item, idx) => (
            <Link 
              key={idx} 
              id={`play-${idx + 1}`} 
              href={item.link} 
              data-cursor="view" 
              className="group flex w-full shrink-0 flex-col justify-center px-6 md:h-full md:w-[42vw] md:px-10 block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-neutral-900">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="pg-img transition-transform duration-500 ease-out group-hover:scale-105 object-cover" 
                />
              </div>
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-sulphur text-[clamp(28px,3.4vw,44px)] leading-tight tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="font-gilroy mt-2 max-w-[380px] text-[16px] leading-relaxed text-white/60">
                    {item.desc}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="font-gilroy rounded-full border border-white/15 px-3 py-1 text-xs tracking-wide text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
