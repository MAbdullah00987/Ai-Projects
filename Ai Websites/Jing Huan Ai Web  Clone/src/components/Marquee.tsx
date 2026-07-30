"use client";
import React from "react";

const items = [
  "Product Design",
  "Creative Technology",
  "AI Prototyping",
  "Web Design",
  "Brand Systems",
  "Vibe Coding"
];

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-white py-6 text-black border-y border-neutral-200">
      <div className="flex w-max flex-nowrap">
        {/* Render twice for seamless infinite loop */}
        {[1, 2].map((groupIndex) => (
          <div key={groupIndex} className="marquee-group flex shrink-0 items-center gap-8 pr-8">
            {items.map((item, i) => (
              <span key={i} className="flex items-center gap-8">
                <span className="font-blinker text-[clamp(28px,5vw,64px)] leading-none tracking-tight">
                  {item}
                </span>
                <span className="text-[clamp(20px,3vw,40px)] text-green-500">✳</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
