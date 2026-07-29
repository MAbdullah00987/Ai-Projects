"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const performances = [
  {
    id: 1,
    title: "Simulacra",
    year: "2024",
    desc: "An experimental moving-image work exploring dance, motion capture, and digital identity.",
    img: "https://www.jingjinghan.com/images/work-T1wIJ.jpg",
    tags: "Creative Technologist · Motion Capture · Moving Image",
    link: "/performance/simulacra"
  },
  {
    id: 2,
    title: "Cave",
    year: "2022",
    desc: "Visualizing infants in the womb — an exploration of the symbiotic relationship between mother and child.",
    img: "https://www.jingjinghan.com/images/Cave.png",
    tags: "Performer · Immersive Theater",
    link: "/performance/cave"
  }
];

export default function Performances() {
  return (
    <section id="performance" className="relative overflow-hidden bg-black px-6 py-24 md:flex md:min-h-screen md:flex-col md:justify-center md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-[1274px]">
        <div className="mb-12 flex flex-col items-center text-center md:mb-0">
          <h2 className="font-blinker pb-[0.2em] text-[clamp(34px,6.5vw,72px)] leading-[0.95] tracking-[-0.03em] text-white">
            Performances & Embodied Experience
          </h2>
          <p className="font-sulphur mt-5 max-w-[620px] text-[clamp(18px,2.2vw,26px)] leading-snug tracking-tight text-white/70">
            On stage and in space — devised theater, movement, and site-specific work where the body is the medium.
          </p>
          <Link href="#" className="group mt-8 inline-flex items-center gap-3 px-8 py-4 font-gilroy text-[14px] font-medium uppercase tracking-[0.18em] text-white transition-transform duration-300 ease-out hover:scale-110 rounded-full border border-white/20">
            View All <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="perf-stage relative mt-14 flex flex-col gap-20 md:mt-20 md:flex-row md:justify-center md:gap-10">
          {performances.map((perf) => (
            <figure key={perf.id} className="perf-card group relative w-full will-change-transform md:w-[min(40vw,500px)]">
              <Link href={perf.link} data-cursor="view" className="block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-neutral-900">
                  <Image 
                    src={perf.img} 
                    alt={perf.title} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-5 pb-4 pt-12">
                    <p className="font-gilroy text-[12px] uppercase tracking-[0.18em] text-white/85">
                      {perf.tags}
                    </p>
                  </div>
                </div>
                <figcaption className="mt-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-blinker text-[20px] font-medium leading-tight text-white md:text-[24px]">
                      {perf.title}
                    </h3>
                    <span className="font-gilroy shrink-0 text-[14px] tabular-nums text-white/40">
                      {perf.year}
                    </span>
                  </div>
                  <p className="font-gilroy mt-1.5 text-[14px] leading-relaxed text-white/55">
                    {perf.desc}
                  </p>
                </figcaption>
              </Link>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
