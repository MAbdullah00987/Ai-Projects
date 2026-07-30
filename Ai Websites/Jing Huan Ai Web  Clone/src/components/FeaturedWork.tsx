"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "AI Learning Platform",
    category: "First Movers",
    desc: "Designed personalized learning journeys and AI-powered experiences for a professional education",
    img: "https://www.jingjinghan.com/images/cs/first-mover/00-1gxmw8jD2K7expU4lIEX7iJjY04.png"
  },
  {
    id: 2,
    title: "FosterHealth AI",
    category: "FosterHealth AI",
    desc: "AI-driven health management tools for a seamless patient experience.",
    img: "https://www.jingjinghan.com/images/sw-fosterhealth.png"
  },
  {
    id: 3,
    title: "Sourcing",
    category: "Sourcing",
    desc: "A comprehensive platform to streamline supply chain discovery and onboarding.",
    img: "https://www.jingjinghan.com/images/sw-crypto.png"
  },
  {
    id: 4,
    title: "Salona",
    category: "Salona",
    desc: "Premium salon and wellness booking experience with modern typography and layout.",
    img: "https://www.jingjinghan.com/images/sw-salona.png"
  }
];

export default function FeaturedWork() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="work" className="flex min-h-screen flex-col justify-center bg-black px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-[1274px]">
        <div>
          <p className="font-gilroy mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-white/50">
            <span className="dot-loop h-2 w-2 rounded-full bg-green-500"></span>Since 2022
          </p>
          <h2 className="font-blinker text-[clamp(40px,8vw,80px)] leading-[0.9] tracking-[-0.03em] text-white">
            Featured Work
          </h2>
          <p className="font-sulphur mt-6 max-w-[760px] text-[clamp(18px,2.2vw,26px)] leading-snug tracking-tight text-white/70">
            I blend technology, creativity, and empathy to craft seamless experiences that bridge people, spaces, and services.
          </p>
        </div>

        <div className="mt-20 flex items-center justify-center gap-4 md:gap-6">
          <button 
            type="button" 
            onClick={prevProject}
            aria-label="Previous project" 
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15 text-white transition-colors duration-300 hover:border-gray-200 hover:text-gray-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div data-cursor="view" style={{ height: "80vh", aspectRatio: "3/2", maxWidth: "100%" }} className="relative block shrink overflow-hidden rounded-[10px] bg-neutral-900 group select-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -10000 || offset.x < -100) {
                    nextProject();
                  } else if (swipe > 10000 || offset.x > 100) {
                    prevProject();
                  }
                }}
              >
                <Image 
                  src={projects[currentIndex].img} 
                  alt={projects[currentIndex].title} 
                  fill 
                  className="object-cover pointer-events-none" 
                  draggable={false}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-2/3 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
              </motion.div>
            </AnimatePresence>

            <span className="pointer-events-none absolute left-5 top-5 z-20 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 font-gilroy text-xs tracking-[0.25em] text-white backdrop-blur-md">
              0{currentIndex + 1} / 0{projects.length}
            </span>

            <div className="sw-info pointer-events-none absolute inset-x-0 bottom-0 z-20 p-7 md:p-10">
              <AnimatePresence mode="wait">
                <motion.h3 
                  key={`title-${currentIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-blinker text-[clamp(26px,3.2vw,44px)] font-medium leading-tight text-white"
                >
                  {projects[currentIndex].title}
                </motion.h3>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p 
                  key={`desc-${currentIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="font-gilroy mt-2 max-w-[560px] text-[15px] leading-relaxed text-white/75 md:text-[16px]"
                >
                  {projects[currentIndex].desc}
                </motion.p>
              </AnimatePresence>
            </div>
            <a href="#" aria-label={projects[currentIndex].title} className="absolute inset-0 z-30 pointer-events-none"></a>
          </div>

          <button 
            type="button" 
            onClick={nextProject}
            aria-label="Next project" 
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15 text-white transition-colors duration-300 hover:border-gray-200 hover:text-gray-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-x-7 gap-y-2 border-t border-white/10 pt-5">
          {projects.map((project, idx) => (
            <button 
              key={project.id}
              onClick={() => setCurrentIndex(idx)}
              type="button" 
              className="font-gilroy text-[15px] transition-colors duration-300 md:text-base" 
              style={{ color: currentIndex === idx ? "#ffffff" : "rgba(255,255,255,0.4)" }}
            >
              {project.category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
