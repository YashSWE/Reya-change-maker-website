"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <header className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden bg-surface">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-secondary rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full py-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase shadow-md shadow-secondary/10">
            8-Day Virtual Journey
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-primary leading-[1.1] tracking-tighter">
            The Young <br /><span className="text-secondary">Change-Maker</span> <br />Workshop
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-lg leading-relaxed font-light">
            Join this 8 day workshop and the journey of becoming a young Impact-creator.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="https://forms.gle/NZo4Rd5frCsfnNfT6" target="_blank" rel="noreferrer" className="inline-block text-center px-8 py-4 bg-secondary text-on-secondary rounded-xl font-headline font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-secondary/20 hover:scale-105 active:scale-95 duration-200">
              Register Now
            </a>
            <a href="#curriculum" className="inline-block text-center px-8 py-4 border-2 border-primary/10 text-primary rounded-xl font-headline font-bold text-lg hover:bg-surface-container-low transition-all hover:scale-105 active:scale-95 duration-200">
              Explore Curriculum
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative lg:block mt-8 lg:mt-0"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden editorial-shadow transform rotate-2 hover:rotate-0 transition-transform duration-500 hover:scale-[1.02]">
            <Image 
              alt="Creative Workshop" 
              className="w-full h-[600px] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXL_5Pwi8TDYSfDGCUnlluAdIDfZli7fuE1UF0nFM4-_7Kkz9G_3oymvMrhgPNtjdvsKTkGsvbZpzFmW19H5FgKx-6OFurmw2L85to36eA8pl6iHAgRIRaSz784pS2UgXAKIFBfVVMm313wZaPxgaZklOWoxHlxUKh34nMvxCcqSeUt_3IgHxfbcfgXflmC_kjQiFMY27Zdy2Cbx73iCXtFZlqW6JQzqixEuMpaZGsTaInOOE7PaoJmMFnuHMEY-AST3wGlN0PnPUE" 
              width={800} height={600}
              priority 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
            className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 bg-white p-6 rounded-2xl editorial-shadow flex items-center gap-4 hover:scale-105 transition-transform cursor-default"
          >
            <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
            </div>
            <div>
              <p className="font-headline font-bold text-primary">Limited Seats</p>
              <p className="text-sm text-on-surface-variant">Ages 11-13 only</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
