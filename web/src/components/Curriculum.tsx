"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Curriculum() {
  return (
    <>
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl md:text-5xl font-black text-primary mb-4 tracking-tighter">What Will Your Child Learn?</h2>
              <p className="text-lg text-on-surface-variant">Master the arts and sciences of impactful leadership through a curated curriculum.</p>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 auto-rows-fr"
          >
            {/* Box 1 */}
            <motion.div variants={itemVariants} className="bg-surface-container-lowest p-6 xl:p-8 rounded-3xl editorial-shadow hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-primary mb-3">Design a Social Initiative</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">From identifying community gaps to building sustainable models that create real-world change.</p>
            </motion.div>

            {/* Box 2 */}
            <motion.div variants={itemVariants} className="bg-secondary text-on-secondary p-6 xl:p-8 rounded-3xl editorial-shadow hover:shadow-xl hover:-translate-y-1 hover:shadow-secondary/20 transition-all duration-300 flex flex-col h-full">
              <span className="material-symbols-outlined text-4xl mb-6">search</span>
              <h3 className="font-headline text-lg sm:text-xl font-bold mb-3">Effective Research Methods</h3>
              <p className="text-secondary-fixed-dim text-sm leading-relaxed">Learn to find, verify, and utilize data to support powerful social narratives.</p>
            </motion.div>

            {/* Box 3 */}
            <motion.div variants={itemVariants} className="bg-surface-container-highest p-6 xl:p-8 rounded-3xl editorial-shadow hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6">smart_toy</span>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-primary mb-3">Understand AI</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Leverage technology responsibly as a tool for solving complex social problems.</p>
            </motion.div>

            {/* Box 4 */}
            <motion.div variants={itemVariants} className="bg-tertiary text-on-tertiary p-6 xl:p-8 rounded-3xl editorial-shadow hover:shadow-xl hover:shadow-tertiary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <span className="material-symbols-outlined text-4xl text-tertiary-fixed mb-6">forum</span>
              <h3 className="font-headline text-lg sm:text-xl font-bold mb-3">Public Speaking</h3>
              <p className="text-on-tertiary-container text-sm leading-relaxed">Command the stage and communicate ideas that inspire others to join your cause.</p>
            </motion.div>

            {/* Box 5 */}
            <motion.div variants={itemVariants} className="bg-surface-container-low p-6 xl:p-8 rounded-3xl editorial-shadow hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6">group</span>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-primary mb-3">Collaborative Spirit</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Learn to work in diverse teams and harness collective intelligence.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8-Day Roadmap */}
      <section className="py-24 bg-surface-container" id="curriculum">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-4xl md:text-5xl font-black text-primary mb-16 text-center"
          >
            The 8-Day Roadmap
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            {[
              { day: "01", title: "Ideation & Design Thinking", subtitle: "Defining the spark of change.", active: false },
              { day: "02", title: "Research & Policy", subtitle: "Understanding the landscape.", active: false },
              { day: "03", title: "Project Development", subtitle: "Building the blueprint.", active: false },
              { day: "04", title: "Effective Communication", subtitle: "Crafting your message.", active: false },
              { day: "05", title: "Guest Session", subtitle: "Learning from the field.", active: true },
              { day: "06", title: "AI & Ethics", subtitle: "Technology for good.", active: false },
              { day: "07", title: "Pitch Preparation", subtitle: "Finalizing the vision.", active: false },
              { day: "08", title: "Pitch Day", subtitle: "Launching the initiative.", highlight: true }
            ].map((item, idx) => (
              <motion.div variants={itemVariants} key={idx} className="relative group">
                <div className={`p-8 rounded-2xl h-full border-l-4 shadow-sm hover:translate-y-[-4px] transition-transform ${item.highlight ? 'bg-primary border-secondary' : 'bg-surface-container-lowest ' + (item.active ? 'border-primary' : 'border-secondary')}`}>
                  <div className={`font-headline font-bold text-sm mb-4 ${item.highlight ? 'text-secondary' : (item.active ? 'text-primary' : 'text-secondary')}`}>DAY {item.day}</div>
                  <h3 className={`font-headline font-bold text-xl mb-2 ${item.highlight ? 'text-on-primary' : 'text-primary'}`}>{item.title}</h3>
                  <p className={`text-sm italic ${item.highlight ? 'text-primary-fixed-dim' : 'text-on-surface-variant'}`}>{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
