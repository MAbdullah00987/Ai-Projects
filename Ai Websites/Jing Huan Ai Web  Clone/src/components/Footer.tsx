import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-10 px-6 md:px-10">
      <div className="mx-auto max-w-[1274px]">
        <div className="flex flex-col items-center justify-center text-center pb-24 border-b border-white/10">
          <h2 className="font-blinker text-[clamp(60px,12vw,180px)] leading-[0.8] tracking-[-0.03em] mb-4">
            Let&apos;s<br/>Collaborate!
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 font-gilroy text-[15px]">
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.25em] text-white/40 mb-6">Menu</h4>
            <ul className="flex flex-col gap-3 text-white/80">
              <li><Link href="#top" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#work" className="hover:text-white transition-colors">Work</Link></li>
              <li><Link href="#playground" className="hover:text-white transition-colors">Playground</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.25em] text-white/40 mb-6">Connect</h4>
            <ul className="flex flex-col gap-3 text-white/80">
              <li><a href="https://www.linkedin.com/in/muhammadabdullaah01" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-white transition-colors">LinkedIn <ArrowUpRight className="w-3 h-3"/></a></li>
              <li><a href="mailto:endingknott0098@gmail.com" className="hover:text-white transition-colors">Email</a></li>
              <li><a href="#" className="inline-flex items-center gap-1 hover:text-white transition-colors">Read.cv <ArrowUpRight className="w-3 h-3"/></a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.25em] text-white/40 mb-6">Say Hello</h4>
            <a href="mailto:endingknott0098@gmail.com" className="text-xl md:text-2xl text-white hover:text-gray-300 transition-colors block mb-4">
              endingknott0098@gmail.com
            </a>
            <p className="flex items-center gap-2 text-white/60 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              Available for work — New York, NY
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-20 pt-6 border-t border-white/10 text-[12px] text-white/40 font-gilroy uppercase tracking-widest">
          <p>©2026 Muhammad Abdullah — All rights reserved</p>
          <a href="#top" className="mt-4 md:mt-0 hover:text-white transition-colors">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
