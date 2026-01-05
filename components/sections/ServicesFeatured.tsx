"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Layers, 
  Palette, 
  Cloud, 
  ArrowUpRight 
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    desc: "Scaleable, high-performance web applications built with modern frameworks and edge computing.",
    icon: Globe,
    href: "/services/web-development",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile experiences that users love, for iOS and Android.",
    icon: Smartphone,
    href: "/services/mobile-app-development",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Custom Software",
    desc: "Tailored enterprise solutions designed to automate workflows and solve complex business problems.",
    icon: Layers,
    href: "/services/custom-software-development",
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    title: "UI/UX Design",
    desc: "User-centric design systems that balance aesthetic beauty with functional simplicity.",
    icon: Palette,
    href: "/services/ui-ux-design",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Cloud & DevOps",
    desc: "Infrastructure automation, CI/CD pipelines, and cloud-native architecture.",
    icon: Cloud,
    href: "/services/cloud-devops",
    color: "from-indigo-500/20 to-blue-500/20",
  },
];

export function ServicesFeatured() {
  return (
    <section className="py-24 px-6 bg-secondary/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-bold tracking-[0.2em] text-gold uppercase">
              Our Expertise
            </h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter">
              PRECISION-ENGINEERED <br />
              <span className="text-foreground/40">SOLUTIONS.</span>
            </h3>
          </div>
          <Link
            href="/services"
            className="flex items-center gap-2 text-foreground font-bold hover:text-gold transition-colors group"
          >
            Explore All Services
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-3xl bg-background border border-primary/10 hover:border-primary/40 transition-all duration-300 flex flex-col gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-gold group-hover:bg-primary group-hover:text-black transition-all">
                <service.icon size={28} />
              </div>
              
              <div className="flex flex-col gap-3">
                <h4 className="text-xl font-bold group-hover:text-gold transition-colors">
                  {service.title}
                </h4>
                <p className="text-foreground/60 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>

              <Link
                href={service.href}
                className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/40 group-hover:text-gold transition-colors pt-6"
              >
                Learn More <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
