"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex bg-black items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 flex">
             {[...Array(5)].map((_, i) => (
                <motion.div 
                  key={i} 
                  initial={{ scaleY: 1 }}
                  exit={{ scaleY: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeInOut" }}
                  className="h-full flex-1 bg-black border-r border-white/5 origin-top"
                />
             ))}
          </div>

          <div className="absolute inset-0 z-10 pointer-events-none">
            <span className="font-gilroy absolute right-6 top-6 leading-none text-white/40 md:right-14 md:top-12">
              <span className="text-[clamp(56px,11vw,150px)] font-light tracking-tight text-white">
                {progress}%
              </span>
            </span>
            <span className="font-sulphur absolute bottom-8 left-6 text-[clamp(64px,15vw,220px)] leading-[0.9] tracking-tight text-white md:bottom-12 md:left-14">
              Design
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
