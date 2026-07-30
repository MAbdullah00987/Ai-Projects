"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState<"default" | "hover" | "view">("default");

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      if (!target || !target.tagName) return;

      const viewCursor = target.closest('[data-cursor="view"]');
      if (viewCursor) {
        setCursorType("view");
        return;
      }

      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setCursorType("hover");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const variants = {
    default: { x: mousePosition.x - 8, y: mousePosition.y - 8, scale: 1, width: 16, height: 16 },
    hover: { x: mousePosition.x - 24, y: mousePosition.y - 24, scale: 1, width: 48, height: 48, backgroundColor: "rgba(255, 255, 255, 0.1)" },
    view: { x: mousePosition.x - 40, y: mousePosition.y - 40, scale: 1, width: 80, height: 80, backgroundColor: "rgba(255, 255, 255, 1)" }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 bg-white rounded-full pointer-events-none z-[999] mix-blend-difference hidden md:flex items-center justify-center font-bold text-center leading-tight"
      animate={variants[cursorType]}
      transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      style={{
        color: cursorType === "view" ? "black" : "transparent",
        fontSize: cursorType === "view" ? "12px" : "0px",
      }}
    >
      {cursorType === "view" ? (
        <span>View<br />Project</span>
      ) : ""}
    </motion.div>
  );
}
