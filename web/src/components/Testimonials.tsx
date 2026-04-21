"use client";

import React from "react";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-4xl md:text-5xl font-black text-primary mb-16 text-center"
        >
          Parent Testimonials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-surface-container p-8 md:p-12 rounded-[2rem] editorial-shadow relative hover:shadow-lg transition-shadow"
          >
            <div className="absolute top-6 left-6 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-6xl">format_quote</span>
            </div>
            <div className="space-y-6 relative z-10">
              <p className="text-xl text-on-surface-variant italic leading-relaxed">
                &quot;Samarth learnt things he had not heard or experienced in his routine classes. I could sense his excitement when he told me about the topics discussed in the workshop.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center font-bold text-secondary">S</div>
                <h5 className="font-headline font-bold text-primary">Parent of Samarth</h5>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface-container p-8 md:p-12 rounded-[2rem] editorial-shadow relative hover:shadow-lg transition-shadow"
          >
            <div className="absolute top-6 left-6 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-6xl">format_quote</span>
            </div>
            <div className="space-y-6 relative z-10">
              <p className="text-xl text-on-surface-variant italic leading-relaxed">
                &quot;Reya, thank you for conducting this amazing workshop. The way you engaged children and introduced them to complex topics like AI ethics was truly impressive.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">H</div>
                <h5 className="font-headline font-bold text-primary">Workshop Parent</h5>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
