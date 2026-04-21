"use client";

import React from "react";
import { motion } from "framer-motion";

export function Mission() {
  return (
    <section className="py-24 bg-surface-container-low" id="about">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-8 text-center space-y-12"
      >
        <motion.div
           initial={{ scale: 0 }}
           whileInView={{ scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
        >
          <span className="material-symbols-outlined text-5xl text-secondary bg-secondary/10 p-4 rounded-full" style={{ fontVariationSettings: "'FILL' 1" }}>
            public
          </span>
        </motion.div>
        <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-primary leading-tight relative inline-block">
          Empowering the Leaders of Tomorrow
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary rounded-full mt-4"></div>
        </h2>
        <div className="space-y-6 text-xl text-on-surface-variant leading-relaxed font-light mt-8">
          <p>
            In a world facing more challenges than ever, the ability to identify and solve real world problems is not just a skill—it&apos;s a necessity for future leaders.
          </p>
          <p>
            Our mission is to cultivate empathy, critical thinking, and social entrepreneurship in young minds, giving them the tools to design meaningful social initiatives.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
