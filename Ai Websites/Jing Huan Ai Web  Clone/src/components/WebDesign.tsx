"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const webProjects = [
  { id: 1, title: "Sourcing", link: "/web/sourcing", img: "https://www.jingjinghan.com/images/web-xNgnG.png" },
  { id: 2, title: "IIDRR", link: "/web/iidrr", img: "https://www.jingjinghan.com/images/cs/Iddrr/1.png" },
  { id: 3, title: "Nuro AI", link: "/web/nuro-ai", img: "https://www.jingjinghan.com/images/web-9qVQP.png" },
  { id: 4, title: "BE Financial ED", link: "/web/be-financial-ed", img: "https://www.jingjinghan.com/images/web-HflwM.png" },
];

export default function WebDesign() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} id="web" className="relative overflow-hidden bg-black px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1274px]">
        <div className="mb-10 md:mb-14">
          <div className="flex items-end justify-between">
            <h2 className="font-blinker pb-[0.2em] text-[clamp(40px,8vw,80px)] leading-[0.9] tracking-[-0.03em] text-white">
              Web Design
            </h2>
            <span className="font-gilroy hidden text-sm uppercase tracking-[0.25em] text-white/40 md:block">
              (04)
            </span>
          </div>
          <p className="font-sulphur mt-6 max-w-[620px] text-[clamp(18px,2.2vw,26px)] leading-snug tracking-tight text-white/70">
            I create digital surfaces that are visually compelling, strategically aligned, and optimized for both users and business growth.
          </p>
        </div>

        <div className="wd-list border-b border-white/10 relative">
          {webProjects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              data-cursor="view"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group flex items-center justify-between gap-6 border-t border-white/10 py-5 md:py-7 relative z-10"
            >
              <div className="flex items-baseline gap-5 md:gap-8">
                <h3 className="wd-title font-blinker text-[clamp(30px,5.5vw,84px)] leading-[0.95] tracking-[-0.02em] transition-all duration-300 group-hover:translate-x-3 text-stroke">
                  {project.title}
                </h3>
              </div>
              <span className="font-gilroy shrink-0 text-lg text-white/30 transition-colors duration-300 group-hover:text-white/80">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 top-0 z-20 hidden md:block w-full h-full">
        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: mousePos.x - 210, // Center image horizontally (420 / 2)
                y: mousePos.y - 150  // Center image vertically (300 / 2)
              }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ 
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
                x: { type: "spring", stiffness: 100, damping: 20, mass: 0.5 },
                y: { type: "spring", stiffness: 100, damping: 20, mass: 0.5 }
              }}
              className="absolute h-[300px] w-[420px] overflow-hidden rounded-[14px] shadow-2xl"
            >
              <Image 
                src={webProjects.find(p => p.id === hoveredProject)?.img || ""} 
                alt="Project Preview" 
                fill 
                className="object-cover" 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
