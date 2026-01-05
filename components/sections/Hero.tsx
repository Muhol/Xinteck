"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Smartphone } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-40 -mt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
            </span>
            <span className="text-xs font-bold tracking-wider text-gold uppercase">
              Now accepting Q1 2026 Projects
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
            WE BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">
              FUTURE-TECH
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed max-w-xl">
            Xinteck is a elite software development agency. We engineer custom digital platforms that scale businesses and redefine industries.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              href="/contact"
              className="group relative  overflow-hidden transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]"
            >
              <div className="relative z-10 flex items-center gap-2 px-8 py-2 bg-primary text-black font-bold rounded-full">
                Start a Project
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-2 border-2 border-primary/20 text-foreground font-bold rounded-full hover:bg-primary/5 transition-all"
            >
              View Our Work
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-primary/10 mt-8">
            {[
              { label: "Success Rate", val: "99%" },
              { label: "Projects", val: "150+" },
              { label: "Engineers", val: "40+" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-gold">{stat.val}</div>
                <div className="text-xs text-foreground/40 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-square w-full max-w-[500px] ml-auto">
            {/* Visual tech representation */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-3xl border border-primary/30 rotate-6" />
            <div className="absolute inset-0 bg-background border border-primary/10 rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center p-12">
              <div className="grid grid-cols-2 gap-4 w-full">
                {[Code, Cpu, Smartphone].map((Icon, i) => (
                  <div
                    key={i}
                    className={cn(
                      "p-8 rounded-2xl bg-secondary/5 border border-primary/10 flex items-center justify-center",
                      i === 2 ? "col-span-2" : ""
                    )}
                  >
                    <Icon size={48} className="text-gold" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute top-10 -left-10 bg-background/80 backdrop-blur border border-primary/20 p-4 rounded-xl shadow-xl animate-bounce duration-[3000ms]">
              <div className="font-bold text-gold">ISO 9001</div>
              <div className="text-[10px] text-foreground/40">CERTIFIED QUALITY</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function cn(...inputs: any) {
  return inputs.filter(Boolean).join(" ");
}
