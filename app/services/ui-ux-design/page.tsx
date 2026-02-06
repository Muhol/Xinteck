"use client";

import { VideoScrollLayout } from "@/components/services/VideoScrollLayout";
import { VIDEO_STATS } from "@/lib/videoStats";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Eye, Layout, Lightbulb, Monitor, MousePointerClick, Palette, PenTool, Sparkles, Thermometer, ToggleRight, UserCheck } from "lucide-react";
import Link from "next/link";

const features = [
  { title: "Visual Identity Systems", icon: Palette, desc: "Comprehensive design languages that communicate your brand's essence instantly." },
  { title: "Conversion Optimization", icon: MousePointerClick, desc: "Data-driven design adjustments that turn visitors into loyal customers." },
  { title: "Design System Creation", icon: Layout, desc: "Scalable component libraries ensuring consistency across all digital touchpoints." },
  { title: "User Research & Testing", icon: Eye, desc: "In-depth behavioral analysis to validate decisions before writing code." },
  { title: "Interactive Prototyping", icon: Monitor, desc: "High-fidelity clickable models to visualize the flow and feel of the product." },
  { title: "Motion Design Labs", icon: Sparkles, desc: "Fluid animations and micro-interactions that delight and guide users." },
];

const process = [
  { step: "01", title: "Research", desc: "Deep dive into user behavior, psychological triggers, and market gaps." },
  { step: "02", title: "Wireframe", desc: "Architecting the information hierarchy and user journey bone structure." },
  { step: "03", title: "Style", desc: "Applying premium aesthetics, typography, and color theory to bring it to life." },
  { step: "04", title: "Iterate", desc: " rigorous testing with real users and refining based on heatmaps and feedback." },
];

export default function UIUXPage() {
  return (
    <VideoScrollLayout 
      videoSrc={VIDEO_STATS.services.src}
      videoStats={VIDEO_STATS.services}
    >
      <div className="flex flex-col gap-12 md:gap-24 py-12 md:py-20">
        {/* Hero Section */}
        <section className="px-6 pt-12 md:pt-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6 md:gap-8 bg-white/30 dark:bg-black/80 backdrop-blur-xl border border-primary/10 rounded-[10px] p-6 md:p-12 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-[10px] bg-primary/10 flex items-center justify-center text-gold">
                  <PenTool size={24} className="md:w-7 md:h-7" />
                </div>
                <h1 className="text-xs md:text-sm font-bold tracking-[0.3em] text-gold uppercase">
                  Visual Strategy
                </h1>
              </div>
              
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight text-foreground">
                UI/UX <br />
                <span className="text-gold">DESIGN.</span>
              </h2>
              
              <p className="text-lg md:text-xl text-foreground/60 leading-relaxed">
                Design that transcends aesthetics. We create user-centric interfaces that convert 
                visitors into loyal customers through science and art.
              </p>
              
              <div className="flex flex-col gap-3 md:gap-4">
                {[
                  "Psychology-driven user interfaces",
                  "Pixel-perfect visual harmony",
                  "Accessibility first approach (WCAG)",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-gold" size={20} />
                    <span className="font-bold text-foreground text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary text-black font-black rounded-[10px] hover:bg-gold-hover transition-all text-sm md:text-base"
                >
                  Start Your Project
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
                <Link
                  href="/portfolio"
                  className="px-6 md:px-8 py-3 md:py-4 border border-primary/20 text-foreground font-bold rounded-[10px] hover:bg-primary/5 hover:border-primary/40 transition-all text-sm md:text-base"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>

            <div className="relative hidden lg:block">
              <div className="absolute -top-8 left-0 text-white/40 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                <span className="w-8 h-[1px] bg-white/20"></span>
                EXAMPLE: SMART HOME HUB
              </div>
              {/* Smart Home Hub Mockup */}
              <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="aspect-square bg-[#0a0a0a] backdrop-blur-xl rounded-[30px] border border-white/10 overflow-hidden shadow-2xl relative p-6 flex flex-col justify-between"
              >
                {/* Header */}
                <div className="flex justify-between items-start">
                   <div>
                      <h4 className="text-white font-bold text-lg">Living Room</h4>
                      <span className="text-white/40 text-xs">Connected • 4 Devices</span>
                   </div>
                   <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                   </div>
                </div>

                {/* Main Visual - Temp Control */}
                <div className="relative flex-1 flex items-center justify-center my-4">
                   <div className="relative w-48 h-48 rounded-full border-4 border-white/5 flex items-center justify-center">
                      {/* Active Arc */}
                     <svg className="absolute inset-0 w-full h-full -rotate-90">
                         <circle cx="96" cy="96" r="90" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-gold" strokeDasharray="565" strokeDashoffset="140" strokeLinecap="round" />
                      </svg>
                      
                      <div className="text-center">
                         <span className="text-xs text-white/40 block">TEMP</span>
                         <span className="text-5xl font-black text-white tracking-tighter">72°</span>
                         <span className="text-xs text-gold block mt-1">Heating...</span>
                      </div>
                   </div>
                   
                   {/* Floating Elements */}
                   <motion.div 
                     animate={{ y: [0, -10, 0] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute top-10 right-4 p-2 bg-white/5 rounded-lg border border-white/10 backdrop-blur-md"
                   >
                     <Thermometer size={16} className="text-gold" />
                   </motion.div>
                </div>

                {/* Controls Row */}
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-white/5 rounded-2xl p-4 border border-white/5 flex flex-col gap-3 group hover:border-gold/50 transition-colors cursor-pointer">
                      <div className="flex justify-between items-center">
                         <Lightbulb size={20} className="text-white/60 group-hover:text-gold transition-colors" />
                         <ToggleRight size={24} className="text-gold" />
                      </div>
                      <div>
                         <span className="text-white font-bold block text-sm">Focus Mode</span>
                         <span className="text-white/40 text-xs">On • 80%</span>
                      </div>
                   </div>
                   <div className="bg-white/5 rounded-2xl p-4 border border-white/5 flex flex-col gap-3 group hover:border-white/20 transition-colors cursor-pointer">
                      <div className="flex justify-between items-center">
                         <Monitor size={20} className="text-white/60" />
                         <div className="w-8 h-4 bg-white/10 rounded-full relative">
                            <div className="absolute left-1 top-1 w-2 h-2 bg-white/20 rounded-full" />
                         </div>
                      </div>
                      <div>
                         <span className="text-white font-bold block text-sm">TV Ambient</span>
                         <span className="text-white/40 text-xs">Off</span>
                      </div>
                   </div>
                </div>
              </motion.div>
              
              {/* Floating Badge - Experience */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-12 p-4 bg-white backdrop-blur-xl border border-primary/20 rounded-[10px] flex items-center gap-3 shadow-lg z-20"
              >
                <div className="p-2 bg-primary/10 rounded-[10px] text-gold">
                  <Sparkles size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-black">Experience</span>
                  <span className="text-[10px] text-gold font-bold">PREMIUM</span>
                </div>
              </motion.div>

              {/* Floating Badge - Accessibility */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 bottom-1/3 p-4 bg-white backdrop-blur-xl border border-primary/20 rounded-[10px] flex items-center gap-3 shadow-lg z-20"
              >
                <div className="p-2 bg-blue-500/10 rounded-[10px] text-blue-400">
                  <UserCheck size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-black">Accessibility</span>
                  <span className="text-[10px] text-blue-400 font-bold">WCAG 2.1 AA</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 flex flex-col gap-4 md:gap-6 bg-white/30 dark:bg-black/80 backdrop-blur-xl border border-primary/10 rounded-[10px] p-6 md:p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
              <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-foreground">
                Capabilities
              </h2>
              <h3 className="text-3xl md:text-6xl font-black tracking-tighter text-foreground">
                WHAT WE <span className="text-foreground/40">DESIGN.</span>
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 md:p-8 rounded-[10px] bg-white/30 dark:bg-black/80 backdrop-blur-xl border border-primary/10 hover:border-primary/40 transition-all flex flex-col gap-4 md:gap-6"
                >
                  <div className="w-12 h-12 rounded-[10px] bg-primary/10 flex items-center justify-center text-gold">
                    <feature.icon size={24} />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-foreground">{feature.title}</h4>
                  <p className="text-foreground/60 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 flex flex-col gap-4 md:gap-6 bg-white/30 dark:bg-black/80 backdrop-blur-xl border border-primary/10 rounded-[10px] p-6 md:p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
              <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-foreground">
                The Creative Process
              </h2>
              <h3 className="text-3xl md:text-6xl font-black tracking-tighter text-foreground">
                HOW WE <span className="text-foreground/40">THINK.</span>
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative p-6 md:p-8 rounded-[10px] bg-white/30 dark:bg-black/80 backdrop-blur-xl border border-primary/10 hover:border-primary/40 transition-all flex flex-col gap-4"
                >
                  <span className="text-5xl md:text-6xl font-black text-gold/10 absolute top-4 right-6">{step.step}</span>
                  <h4 className="text-lg md:text-xl font-bold text-foreground z-10">{step.title}</h4>
                  <p className="text-foreground/60 text-sm leading-relaxed z-10">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 mb-12 md:mb-20">
          <div className="max-w-7xl mx-auto bg-white/30 dark:bg-black/80 backdrop-blur-xl border border-primary/10 rounded-[10px] p-8 md:p-24 text-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
            <h3 className="text-3xl md:text-7xl font-black tracking-tighter mb-6 md:mb-8 max-w-4xl mx-auto text-foreground">
              NEED A <span className="text-gold">MAKEOVER?</span>
            </h3>
            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-8 md:mb-10">
              Let&apos;s craft a digital experience that your users will fall in love with.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 md:px-12 py-4 md:py-5 bg-foreground text-background font-black rounded-[10px] hover:bg-gold-hover transition-all text-sm md:text-base"
            >
              Start Design Sprint
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </VideoScrollLayout>
  );
}
