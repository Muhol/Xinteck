"use client";


import { VideoScrollLayout } from "@/components/services/VideoScrollLayout";
import { VIDEO_STATS } from "@/lib/videoStats";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, Globe, Layers, Rocket, Server, Shield, Zap } from "lucide-react";
import Link from "next/link";

const features = [
  { title: "React & Next.js Architecture", icon: Code2, desc: "Modern component-based development with server-side rendering." },
  { title: "E-commerce Ecosystems", icon: Layers, desc: "Scalable online stores with payment integration and inventory." },
  { title: "Headless CMS Integration", icon: Server, desc: "Content management that separates front-end from back-end." },
  { title: "PWA & Responsive Labs", icon: Globe, desc: "Progressive web apps that work offline and on any device." },
  { title: "Global CDN Deployment", icon: Rocket, desc: "Lightning-fast delivery from edge servers worldwide." },
  { title: "API First Development", icon: Zap, desc: "RESTful and GraphQL APIs built for maximum flexibility." },
];

const process = [
  { step: "01", title: "Blueprint", desc: "Detailed technical specification and architecture design tailored to your needs." },
  { step: "02", title: "Sprint", desc: "High-velocity development with continuous integration and daily progress updates." },
  { step: "03", title: "Audit", desc: "Rigorous performance, security, and accessibility testing before launch." },
  { step: "04", title: "Launch", desc: "Deployment to global edge servers with 99.9% uptime guarantee." },
];

export default function WebDevPage() {
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
                  <Globe size={24} className="md:w-7 md:h-7" />
                </div>
                <h1 className="text-xs md:text-sm font-bold tracking-[0.3em] text-gold uppercase">
                  Digital Platforms
                </h1>
              </div>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-black tracking-tighter leading-tight text-foreground">
                WEB <br />
                <span className="text-gold">DEVELOPMENT.</span>
              </h2>
              
              <p className="text-lg md:text-xl text-foreground/60 leading-relaxed">
                We craft high-performance, secure, and infinitely scalable web applications. 
                Our engineering team focuses on lightning-fast load times and seamless user experiences.
              </p>
              
              <div className="flex flex-col gap-3 md:gap-4">
                {[
                  "Custom web applications built to scale",
                  "Optimized for speed and SEO performance",
                  "Secure, maintainable, and future-proof",
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
                  View Portfolio
                </Link>
              </div>
            </motion.div>

            <div className="relative hidden lg:block perspective-1000 scale-[0.75] origin-top-left translate-y-16">
              <div className="absolute -top-12 left-0 text-white/40 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                <span className="w-8 h-[1px] bg-white/20"></span>
                EXAMPLE: E-COMMERCE API
              </div>
              <motion.div 
               initial={{ rotateY: -10, rotateX: 5, scale: 0.9 }}
               animate={{ rotateY: 0, rotateX: 0, scale: 1 }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               className="relative z-10 bg-[#0a0a0a] border border-white/10 rounded-[10px] shadow-2xl overflow-hidden"
              >
               {/* Window Controls */}
               <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/80" />
                     <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                     <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex text-xs text-white/30 font-mono gap-4">
                     <span>App.tsx</span>
                     <span className="text-white/10">|</span>
                     <span>analytics.ts</span>
                  </div>
               </div>
               
               {/* Code Area */}
               <div className="p-6 font-mono text-sm leading-relaxed text-gray-400">
                  <div className="flex gap-4">
                     <div className="flex flex-col text-right text-gray-700 select-none">
                        {Array.from({length: 12}).map((_, i) => <span key={i}>{i+1}</span>)}
                     </div>
                     <div className="flex flex-col gap-1 w-full">
                        <span className="text-purple-400">import</span> <span className="text-yellow-100">React</span>, {"{"} <span className="text-yellow-100">useEffect</span> {"}"} <span className="text-purple-400">from</span> <span className="text-green-400">&apos;react&apos;</span>;
                        <br />
                        <span className="text-blue-400">export default</span> <span className="text-blue-400">function</span> <span className="text-yellow-200">WebApp</span>() {"{"}
                        <span className="pl-4 text-purple-400">const</span> [data, setData] = <span className="text-yellow-200">useState</span>(<span className="text-purple-400">null</span>);
                        <br />
                        <span className="pl-4 text-yellow-200">useEffect</span>(() =&gt; {"{"}
                        <span className="pl-8 text-gray-400">{`// Real-time optimization`}</span>
                        <span className="pl-8 text-cyan-400">initializeCore</span>({"{"}
                        <span className="pl-12">mode: <span className="text-green-400">&apos;turbo&apos;</span>,</span>
                        <span className="pl-12">sync: <span className="text-purple-400">true</span></span>
                        <span className="pl-8">{"});"}</span>
                        <span className="pl-4">{"}, []);"}</span>
                        <br />
                        <span className="pl-4 text-purple-400">return</span> <span className="text-blue-400">&lt;Dashboard /&gt;</span>;
                        {"}"}
                     </div>
                  </div>
               </div>
               
               {/* Status Bar */}
               <div className="bg-primary text-black text-xs font-bold px-4 py-1 flex justify-between">
                  <span>COMPILING...</span>
                  <span>Ln 15, Col 2</span>
               </div>
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -right-4 -top-4 p-4 bg-white backdrop-blur-xl border border-primary/20 rounded-[10px] flex items-center gap-3 shadow-lg z-20"
              >
               <div className="p-2 bg-green-500/10 rounded-[10px] text-green-400">
                  <Shield size={20} />
               </div>
               <div className="flex flex-col">
                  <span className="text-xs font-bold text-black">Security First</span>
                  <span className="text-[10px] text-green-400 font-bold">CERTIFIED</span>
               </div>
              </motion.div>

              {/* Second Floating Badge - API Latency */}
              <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
               className="absolute -left-4 -bottom-4 p-4 bg-white backdrop-blur-xl border border-primary/20 rounded-[10px] flex items-center gap-3 shadow-lg z-20"
              >
               <div className="p-2 bg-blue-500/10 rounded-[10px] text-blue-400">
                  <Zap size={20} />
               </div>
               <div className="flex flex-col">
                  <span className="text-xs font-bold text-black">API Latency</span>
                  <span className="text-[10px] text-blue-400 font-bold">12ms (Global)</span>
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
                WHAT WE <span className="text-foreground/40">BUILD.</span>
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
                The X-Workflow
              </h2>
              <h3 className="text-3xl md:text-6xl font-black tracking-tighter text-foreground">
                HOW WE <span className="text-foreground/40">DELIVER.</span>
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
              READY TO <span className="text-gold">BUILD?</span>
            </h3>
            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-8 md:mb-10">
              Let&apos;s discuss your web development project and create something extraordinary together.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 md:px-12 py-4 md:py-5 bg-foreground text-background font-black rounded-[10px] hover:bg-gold-hover transition-all text-sm md:text-base"
            >
              Get a Custom Proposal
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </VideoScrollLayout>
  );
}
