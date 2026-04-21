"use client";

import React from "react";
import { motion } from "framer-motion";

const WORKSHOP_TOPICS = [
  "Help growing entrepreneurs go digital",
  "Conduct musical events in underserved schools",
  "Start a \"Respect for Workers\" Campaign",
  "Design educational flashcards for underprivileged students",
  "Grow awareness on E-waste management"
];

export function Perks() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline text-3xl font-bold text-primary mb-10">Workshop Perks</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-secondary mb-4">videogame_asset</span>
              <h4 className="font-headline font-bold text-primary">Fun games</h4>
              <p className="text-sm text-on-surface-variant">Gamified learning experience.</p>
            </div>
            <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-secondary mb-4">rocket_launch</span>
              <h4 className="font-headline font-bold text-primary">Capstone project</h4>
              <p className="text-sm text-on-surface-variant">Real-world implementation.</p>
            </div>
            <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-secondary mb-4">redeem</span>
              <h4 className="font-headline font-bold text-primary">Exclusive goodies</h4>
              <p className="text-sm text-on-surface-variant">Starter kit for change-makers.</p>
            </div>
            <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-secondary mb-4">verified</span>
              <h4 className="font-headline font-bold text-primary">Certificate</h4>
              <p className="text-sm text-on-surface-variant">Global recognition of skill.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="bg-primary p-12 rounded-[2rem] text-on-primary relative overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[15rem]">language</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-8 relative z-10">Topics We Explore</h2>
          <ul className="space-y-6 relative z-10">
            {WORKSHOP_TOPICS.map((topic, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-4"
              >
                <span className="w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                <span className="text-xl font-light">{topic}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
