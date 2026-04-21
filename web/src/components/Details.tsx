"use client";

import React from "react";
import { motion } from "framer-motion";

export function Details() {
  return (
    <section className="py-24 bg-primary text-on-primary" id="details">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-lg rounded-[3rem] p-8 md:p-16 border border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline text-4xl md:text-5xl font-black mb-8">Important Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-1">
                  <p className="text-on-primary-container text-sm font-bold uppercase tracking-widest">Duration</p>
                  <p className="text-2xl font-light">1 Hr Sessions (8 Days)</p>
                </div>
                <div className="space-y-1">
                  <p className="text-on-primary-container text-sm font-bold uppercase tracking-widest">Mode</p>
                  <p className="text-2xl font-light">Live on Zoom</p>
                </div>
                <div className="space-y-1">
                  <p className="text-on-primary-container text-sm font-bold uppercase tracking-widest">Age Group</p>
                  <p className="text-2xl font-light">11-13 Years</p>
                </div>
                <div className="space-y-1">
                  <p className="text-on-primary-container text-sm font-bold uppercase tracking-widest">Dates</p>
                  <p className="text-2xl font-light">15 - 24 April (Tentative)</p>
                </div>
                <div className="space-y-1">
                  <p className="text-on-primary-container text-sm font-bold uppercase tracking-widest">Timings</p>
                  <p className="text-2xl font-light">4:00 - 5:00 PM (Tentative)</p>
                </div>
                <div className="space-y-1">
                  <p className="text-on-primary-container text-sm font-bold uppercase tracking-widest">Workshop Fee</p>
                  <p className="text-2xl font-bold text-secondary-fixed">₹ 1000/-</p>
                </div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-surface rounded-3xl p-10 text-primary editorial-shadow"
            >
              <h3 className="font-headline text-2xl font-black mb-6">Ready to create impact?</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">Secure your child&apos;s spot in this exclusive 8-day journey. Limited slots available to ensure personalized attention for every young change-maker.</p>
              <a 
                href="https://forms.gle/NZo4Rd5frCsfnNfT6" 
                target="_blank" 
                rel="noreferrer"
                className="block text-center w-full py-5 bg-secondary text-on-secondary rounded-2xl font-headline font-black text-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-secondary/30 mb-4 hover:opacity-90 duration-200"
              >
                Register Now
              </a>
              <p className="text-center text-sm text-on-surface-variant">Early bird certificates included for the first 10 registrations.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
