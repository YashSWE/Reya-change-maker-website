"use client";

import React from "react";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(29,28,22,0.06)] no-border transition-colors duration-300"
    >
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <a className="font-headline text-xl font-black tracking-tighter text-stone-900 dark:text-stone-50" href="#">
          The Young Change-Maker Workshop
        </a>
        <div className="hidden md:flex items-center space-x-8 font-headline tracking-tight font-semibold">
          <a className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors" href="#about">About</a>
          <a className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors" href="#curriculum">Curriculum</a>
          <a className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors" href="#facilitator">Facilitator</a>
          <a className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors" href="#details">Details</a>
        </div>
        <a href="https://forms.gle/NZo4Rd5frCsfnNfT6" target="_blank" rel="noreferrer" className="inline-block bg-secondary text-on-secondary px-6 py-2.5 rounded-xl font-headline font-bold hover:opacity-90 transition-all duration-200 scale-95 hover:scale-100 active:scale-90">
          Register Now
        </a>
      </div>
    </motion.nav>
  );
}
