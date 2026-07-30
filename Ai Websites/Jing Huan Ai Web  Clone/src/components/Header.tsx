"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down -> hide navbar
        setHidden(true);
      } else {
        // Scrolling up -> show navbar
        setHidden(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[120] h-[3px]" aria-hidden="true">
        <motion.div 
          className="h-full w-full origin-left scale-x-100" 
          style={{ background: "linear-gradient(90deg, var(--accent), var(--accent-green))" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      <header className={`fixed inset-x-0 top-0 z-[100] flex justify-center px-4 pt-4 transition-transform duration-500 ease-in-out ${hidden ? '-translate-y-[150%]' : 'translate-y-0'}`}>
        <div className={`nav-native-cursor flex w-full items-center justify-between rounded-full border border-white/10 transition-all duration-500 ease-out opacity-100 ${scrolled ? 'bg-black/80 backdrop-blur-md px-3 py-2 max-w-[1000px]' : 'bg-transparent px-6 py-4 max-w-[1400px]'}`}>
          <Link href="#top" className="group flex items-center gap-2.5">
            <span className="relative shrink-0 transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110">
              <div className={`rounded-full bg-neutral-800 ring-1 ring-white/20 overflow-hidden relative transition-all duration-500 ${scrolled ? 'h-10 w-10' : 'h-12 w-12'}`}>
                <Image src="/mine-pic.jpeg" alt="Muhammad Abdullah" fill className="object-cover object-top" />
              </div>
              <span className="dot-loop absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500"></span>
            </span>
            <span className={`font-blinker whitespace-nowrap text-white transition-all duration-500 ${scrolled ? 'text-[15px] md:text-[16px]' : 'text-[16px] md:text-[18px]'}`}>
              Muhammad Abdullah<span className="text-gray-300">.</span>
            </span>
          </Link>

          <div className="relative hidden items-center justify-end md:flex">
            <div className="flex items-center gap-5 transition-opacity duration-300 md:gap-7 opacity-100">
              <nav className="font-gilroy flex items-center gap-6 text-[16px] text-white md:gap-8 md:text-[18px]">
                <Link href="#work" className="group relative inline-flex items-center gap-1 py-1 transition-colors duration-300 hover:text-gray-300">
                  Design
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="#performance" className="group relative inline-flex items-center gap-1 py-1 transition-colors duration-300 hover:text-gray-300">
                  Performances
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="#about" className="group relative inline-flex items-center gap-1 py-1 transition-colors duration-300 hover:text-gray-300">
                  About
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <a href="https://remaketool.framer.website/" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-1 py-1 transition-colors duration-300 hover:text-gray-300">
                  Resources <span className="text-[0.7em] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">↗</span>
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </nav>

              <span className="h-4 w-px bg-white/20" aria-hidden="true"></span>

              <div className="flex items-center gap-3.5">
                <a href="https://www.linkedin.com/in/muhammadabdullaah01" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:rotate-6 hover:scale-125">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5 text-gray-300 hover:text-white transition-colors">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                  </svg>
                </a>
                <a href="mailto:endingknott0098@gmail.com" className="transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:rotate-6 hover:scale-125">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5 text-gray-300 hover:text-white transition-colors">
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <button type="button" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)} className="relative flex h-10 w-10 items-center justify-center md:hidden">
            <span className="relative block h-3.5 w-6">
              <span className={`absolute left-0 h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${menuOpen ? 'top-1.5 rotate-45' : 'top-0'}`}></span>
              <span className={`absolute left-0 top-1.5 h-0.5 w-6 rounded-full bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute left-0 h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${menuOpen ? 'top-1.5 -rotate-45' : 'top-3'}`}></span>
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute inset-x-4 top-[72px] rounded-3xl border border-white/10 bg-black/95 p-4 backdrop-blur-xl transition-all duration-300 md:hidden ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <nav className="font-gilroy flex flex-col text-[18px] text-white">
            <Link href="#work" onClick={() => setMenuOpen(false)} className="flex items-center gap-1.5 rounded-xl px-3 py-3 transition-colors hover:bg-white/5">Design</Link>
            <Link href="#performance" onClick={() => setMenuOpen(false)} className="flex items-center gap-1.5 rounded-xl px-3 py-3 transition-colors hover:bg-white/5">Performances</Link>
            <Link href="#about" onClick={() => setMenuOpen(false)} className="flex items-center gap-1.5 rounded-xl px-3 py-3 transition-colors hover:bg-white/5">About</Link>
            <a href="#" className="flex items-center gap-1.5 rounded-xl px-3 py-3 transition-colors hover:bg-white/5">Resources <ArrowUpRight className="w-3 h-3" /></a>
          </nav>
        </div>
      </header>
    </>
  );
}
