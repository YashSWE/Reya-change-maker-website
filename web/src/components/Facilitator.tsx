"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Facilitator() {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden" id="facilitator">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-surface-container-highest rounded-[3rem] overflow-hidden shadow-2xl relative z-10 group">
            <Image 
              alt="Facilitator Reya Jain" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvFoKgqup8LLdcDpgURUb3F8A_FzwAMxLV3Xoz5-pzQT4JdJja-YMW5cEZ6skKCx0McHvCZfwg9O3I24nBK98ZzEn9KrZAy9MBujUCIrAT1OmdqopLS9_p02B4tmMs0FzHkoRmkrD7zS-BVXoHVt6w96DOHbV9QEdz1b1v3l2T4tW4uagfpPf3USJUTvbtlRsm8UbpKM-u4Ld2-ut0iZoQooIeibK6nogfORupSpXQ5e-aciFnIKPPuaBDI_slIALWbLSRhFFDOq76" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h4 className="text-secondary font-headline font-bold uppercase tracking-widest text-sm">Our Facilitator</h4>
            <h2 className="font-headline text-5xl font-black text-primary">Reya Jain</h2>
          </div>
          <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
            <p className="font-bold text-primary">Grade 11 Student & WICCI Council Lead</p>
            <p>
              A passionate business student at Chirec with a keen interest in entrepreneurship, having pitched her idea at the Indian School of Business. Reya is also the Communications & Events Intern at Beyond the Box.
            </p>
            <p>
              With internships at Ariko Cafe, Lulu Mall, and Gachibowli Stadium, and a role in the marketing OC at Chirec TEDx, she brings real-world experience to help young students turn passion into purpose.
            </p>
          </div>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.6 }}
             className="pt-4"
          >
            <div className="inline-flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-secondary/20 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-tertiary/20 border-2 border-white"></div>
              </div>
              <p className="text-sm font-bold text-primary">Pitched at ISB</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
