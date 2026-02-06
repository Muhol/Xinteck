"use client";

import { VideoScrollLayout } from "@/components/services/VideoScrollLayout";
import { VIDEO_STATS } from "@/lib/videoStats";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Fingerprint, Layers, Layout, Smartphone, Tablet, Wifi, Zap } from "lucide-react";
import Link from "next/link";

const features = [
  { title: "iOS Swift Development", icon: Smartphone, desc: "Native iOS applications built with Swift and SwiftUI for maximum performance." },
  { title: "Android Kotlin Apps", icon: Tablet, desc: "Modern Android experiences leveraging the latest Jetpack libraries." },
  { title: "Cross-Platform React Native", icon: Layers, desc: "Code once, deploy everywhere without compromising on native feel." },
  { title: "App Store Optimization", icon: Layout, desc: "Strategic positioning to maximize visibility and downloads." },
  { title: "Biometric Security", icon: Fingerprint, desc: "Integration of FaceID and TouchID for secure, frictionless authentication." },
  { title: "Offline-First Logic", icon: Wifi, desc: "Robust data synchronization ensuring app works perfectly without internet." },
];

const process = [
  { step: "01", title: "Prototype", desc: "Interactive low-fidelity and high-fidelity wireframing to validate flow." },
  { step: "02", title: "Develop", desc: "Clean, native-feel coding with modular architectures and TDD." },
  { step: "03", title: "Connect", desc: "Deep integration with cloud backends, databases, and third-party APIs." },
  { step: "04", title: "Quality", desc: " rigorous testing across 50+ real device types and OS versions." },
];

export default function MobileAppPage() {
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
                  <Smartphone size={24} className="md:w-7 md:h-7" />
                </div>
                <h1 className="text-xs md:text-sm font-bold tracking-[0.3em] text-gold uppercase">
                  Native Experiences
                </h1>
              </div>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-black tracking-tighter leading-tight text-foreground">
                MOBILE APP <br />
                <span className="text-gold">DEVELOPMENT.</span>
              </h2>
              
              <p className="text-lg md:text-xl text-foreground/60 leading-relaxed">
                Creating stunning, intuitive mobile apps for iOS and Android. 
                We focus on deep system integration and fluid animations that users love.
              </p>
              
              <div className="flex flex-col gap-3 md:gap-4">
                {[
                  "Native performance across all devices",
                  "Touch-optimized UI/UX design",
                  "Seamless cloud synchronization",
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

            <div className="relative hidden lg:block h-full min-h-[500px] flex items-center justify-center translate-x-12 translate-y-16">
              <div className="absolute top-0 left-0 text-white/40 text-xs font-bold tracking-widest uppercase flex items-center gap-2 z-20">
                <span className="w-8 h-[1px] bg-white/20"></span>
                EXAMPLE: FINTECH APP
              </div>
              {/* Floating Smartphone Mockup */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10"
              >
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-[280px] h-[560px] bg-black rounded-[3rem] border-4 border-gray-800 shadow-2xl overflow-hidden"
                  >
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-black rounded-b-xl z-20 flex items-center justify-center gap-2">
                        <div className="w-12 h-1 bg-gray-800 rounded-full" />
                        <div className="w-1 h-1 bg-blue-900/50 rounded-full" />
                      </div>

                      {/* Screen Content */}
                      <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                          {/* Grid Pattern Overlay */}
                          <div className="absolute inset-0 opacity-20" 
                               style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '20px 20px' }} 
                          />
                          
                          {/* Static App Logo */}
                          <div className="relative w-32 h-32">
                             {/* eslint-disable-next-line @next/next/no-img-element */}
                             <img 
                                src="/logos/logo-dark.png" 
                                alt="App Icon" 
                                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                             />
                          </div>

                          {/* UI Elements Mockup */}
                          <div className="absolute bottom-12 left-6 right-6 flex flex-col gap-3">
                              <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                              <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                              <div className="h-12 w-full bg-white/5 rounded-xl mt-4 border border-white/10 backdrop-blur-sm" />
                          </div>
                      </div>
                  </motion.div>
              </motion.div>
              


              {/* Floating Badge - Performance */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-12 top-1/3 p-4 bg-white backdrop-blur-xl border border-primary/20 rounded-[10px] flex items-center gap-3 shadow-lg z-20"
              >
                <div className="p-2 bg-blue-500/10 rounded-[10px] text-blue-400">
                  <Zap size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-black">Performance</span>
                  <span className="text-[10px] text-blue-400 font-bold">60 FPS NATIVE</span>
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
                WHAT WE <span className="text-foreground/40">CRAFT.</span>
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
                The App Lifecycle
              </h2>
              <h3 className="text-3xl md:text-6xl font-black tracking-tighter text-foreground">
                HOW WE <span className="text-foreground/40">EXECUTE.</span>
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
              HAVE AN <span className="text-gold">IDEA?</span>
            </h3>
            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-8 md:mb-10">
              Let&apos;s turn your mobile app concept into a top-charting reality.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 md:px-12 py-4 md:py-5 bg-foreground text-background font-black rounded-[10px] hover:bg-gold-hover transition-all text-sm md:text-base"
            >
              Get a Free Consultation
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </VideoScrollLayout>
  );
}
