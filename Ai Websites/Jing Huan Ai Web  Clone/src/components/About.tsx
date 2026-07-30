"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const introTexts = {
  "For anyone": "I'm Muhammad Abdullah — a product designer who blends creativity, technology, and a little vibe-coding into experiences that feel genuinely human.",
  "Recruiters": "I specialize in end-to-end product design, bringing high-fidelity prototypes and strong system thinking to cross-functional teams.",
  "Product Designers": "I love talking about design systems, smooth animations, and how we can push web experiences beyond the conventional grids.",
  "Product Managers": "I focus on user-centric solutions that align with business goals, ensuring every feature we ship solves a real problem efficiently.",
  "Engineers": "I design with implementation in mind. I love collaborating on code, component libraries, and bridging the gap between design and dev."
};

type Role = keyof typeof introTexts;

export default function About() {
  const [activeRole, setActiveRole] = useState<Role>("For anyone");

  return (
    <section id="about" className="flex min-h-[100svh] items-center overflow-hidden bg-black px-6 py-24 md:px-10">
      <div className="mx-auto flex w-full max-w-[1274px] flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <div className="about-intro flex shrink-0 flex-col items-start lg:w-[240px] lg:pt-1">
          <h2 className="font-blinker text-[clamp(40px,8vw,80px)] leading-[0.9] tracking-[-0.03em] text-white">
            Intro
          </h2>
          <nav className="mt-8 flex flex-col items-start gap-0.5">
            {Object.keys(introTexts).map((role) => (
              <button
                key={role}
                type="button"
                data-cursor-hover="true"
                onMouseEnter={() => setActiveRole(role as Role)}
                className={`group font-gilroy flex items-center gap-3 py-2 text-left text-[18px] transition-colors duration-200 md:text-[20px] ${
                  activeRole === role ? "text-white" : "text-white/40 hover:text-white/75"
                }`}
              >
                <span
                  className={`block h-px bg-current transition-all duration-300 ${
                    activeRole === role ? "w-9 opacity-100" : "w-4 opacity-40 group-hover:w-6"
                  }`}
                ></span>
                {role}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="about-card w-full lg:max-w-[790px] lg:flex-1">
          <div 
            className="notepad group relative h-[600px] overflow-hidden p-8 md:h-[840px] md:p-11 lg:h-[700px] rounded-lg bg-[#111]"
            style={{
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px)',
              backgroundSize: '24px 24px',
              clipPath: 'polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0 100%)'
            }}
          >
            {/* Folded corner effect */}
            <div 
              className="absolute top-0 right-0 w-[60px] h-[60px] bg-[#222]" 
              style={{
                boxShadow: '-4px 4px 10px rgba(0,0,0,0.5)',
                clipPath: 'polygon(0 0, 0 100%, 100% 100%)'
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeRole}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 h-full"
              >
                <p className="font-sulphur text-[30px] font-normal leading-[1.28] tracking-[-0.01em] md:text-[56px] text-white/35 group-hover:text-white transition-colors duration-500">
                  {introTexts[activeRole]}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
