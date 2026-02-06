"use client";

import { VideoScrollLayout } from "@/components/services/VideoScrollLayout";
import { VIDEO_STATS } from "@/lib/videoStats";
import { motion } from "framer-motion";
import { ArrowRight, Box, CheckCircle2, Database, Layers, LayoutTemplate, RefreshCcw, ShieldCheck, Sun, TrendingUp, Workflow } from "lucide-react";
import Link from "next/link";

const features = [
  { title: "Legacy Modernization", icon: RefreshCcw, desc: "Transform outdated systems into modern, scalable cloud architectures." },
  { title: "Custom ERP/CRM Systems", icon: LayoutTemplate, desc: "Tailor-made management tools that fit your unique business processes perfectly." },
  { title: "Automated Workflows", icon: Workflow, desc: "Eliminate manual tasks with intelligent business process automation." },
  { title: "Data Lake Architecture", icon: Database, desc: "Centralized data repositories for advanced analytics and reporting." },
  { title: "Microservices Design", icon: Box, desc: "Decoupled architecture for improved scalability and easier maintenance." },
  { title: "Internal Admin Tools", icon: ShieldCheck, desc: "Secure dashes and portals to empower your internal teams." },
];

const process = [
  { step: "01", title: "Discovery", desc: "Deep dive workshops to understand the complex roadblocks in your current system." },
  { step: "02", title: "Architect", desc: "Building a rock-solid technical foundation designed for long-term scalability." },
  { step: "03", title: "Integrate", desc: "Seamlessly connecting new custom tools with your existing tech stack." },
  { step: "04", title: "Support", desc: "Continuous maintenance, updates, and dedicated 24/7 technical support." },
];

export default function CustomSoftwarePage() {
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
                  <Layers size={24} className="md:w-7 md:h-7" />
                </div>
                <h1 className="text-xs md:text-sm font-bold tracking-[0.3em] text-gold uppercase">
                  Enterprise Solutions
                </h1>
              </div>
              
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight text-foreground">
                CUSTOM <br />
                <span className="text-gold">SOFTWARE.</span>
              </h2>
              
              <p className="text-lg md:text-xl text-foreground/60 leading-relaxed">
                Tailor-made software built to solve unique business challenges. 
                We automate the complex and streamline the legacy for modern growth.
              </p>
              
              <div className="flex flex-col gap-3 md:gap-4">
                {[
                  "Automate complex business logic",
                  "Secure enterprise-grade architecture",
                  "Seamless 3rd-party integrations",
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
                EXAMPLE: SOLAR CALCULATOR
              </div>
              {/* Solar Calculator Mockup Card */}
              <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="aspect-square bg-[#0a0a0a] backdrop-blur-xl rounded-[20px] border border-white/10 overflow-hidden shadow-2xl relative"
              >
                {/* Header */}
                <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-500/20 rounded-lg text-orange-400">
                      <Sun size={18} />
                    </div>
                    <span className="text-white font-bold text-sm tracking-wide">SOLAR ROI ENGINE</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-8 flex flex-col gap-8 h-full">
                  {/* Stats Row */}
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                        <span className="text-xs text-white/40 font-bold uppercase block mb-1">Yearly Savings</span>
                        <span className="text-2xl font-black text-green-400">$2,450</span>
                     </div>
                     <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                        <span className="text-xs text-white/40 font-bold uppercase block mb-1">Energy Offset</span>
                        <span className="text-2xl font-black text-gold">105%</span>
                     </div>
                  </div>

                  {/* Graph Animation */}
                  <div className="flex-1 bg-white/5 rounded-xl border border-white/5 p-4 relative overflow-hidden flex items-end gap-3 px-6 pb-6">
                      <div className="absolute top-4 left-4 text-xs text-white/40 font-bold uppercase">Projected Savings</div>
                      {/* Bars */}
                      {[30, 45, 60, 50, 75, 90, 100].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: i * 0.1, ease: "backOut" }}
                          className="flex-1 bg-gradient-to-t from-gold/20 to-gold rounded-t-sm opacity-80"
                        />
                      ))}
                      
                      {/* Trend Line Overlay */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ padding: '24px' }}>
                        <motion.path
                          d="M0 100 Q 50 80, 100 60 T 200 20"
                          fill="none"
                          stroke="#4ade80"
                          strokeWidth="3"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 1 }}
                        />
                      </svg>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Badge - Sun Analysis */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-8 p-4 bg-white backdrop-blur-xl border border-primary/20 rounded-[10px] flex items-center gap-3 shadow-xl z-20"
              >
                <div className="p-2 bg-orange-500/10 rounded-[10px] text-orange-500">
                  <Sun size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-black">Sun Analysis</span>
                  <span className="text-[10px] text-orange-500 font-bold">5.2 PEAK HRS</span>
                </div>
              </motion.div>

              {/* Floating Badge - Efficiency */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -left-8 bottom-20 p-4 bg-white backdrop-blur-xl border border-primary/20 rounded-[10px] flex items-center gap-3 shadow-xl z-20"
              >
                <div className="p-2 bg-green-500/10 rounded-[10px] text-green-500">
                  <TrendingUp size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-black">System ROI</span>
                  <span className="text-[10px] text-green-500 font-bold">4.2 YEARS</span>
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
                WHAT WE <span className="text-foreground/40">SOLVE.</span>
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
                The Blueprint
              </h2>
              <h3 className="text-3xl md:text-6xl font-black tracking-tighter text-foreground">
                HOW WE <span className="text-foreground/40">SCALE.</span>
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
              NEED A <span className="text-gold">SOLUTION?</span>
            </h3>
            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-8 md:mb-10">
              Let&apos;s engineer a custom software solution that puts you miles ahead of the competition.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 md:px-12 py-4 md:py-5 bg-foreground text-background font-black rounded-[10px] hover:bg-gold-hover transition-all text-sm md:text-base"
            >
              Get a Technical Audit
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </VideoScrollLayout>
  );
}
