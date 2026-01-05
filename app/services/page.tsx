"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Layers, 
  Palette, 
  Cloud, 
  ChevronRight,
  Code,
  Zap,
  Lock,
  BarChart
} from "lucide-react";
import Link from "next/link";

const allServices = [
  {
    title: "Web Development",
    slug: "web-development",
    description: "High-performance websites and web applications built with the latest technologies like React, Next.js, and Node.js.",
    features: ["Custom Web Apps", "E-commerce Solutions", "Progressive Web Apps (PWAs)", "API Integration"],
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Stunning mobile experiences for iOS and Android, focusing on performance, usability, and deep system integration.",
    features: ["iOS Development", "Android Development", "React Native", "Flutter Solutions"],
    icon: Smartphone,
  },
  {
    title: "Custom Software",
    slug: "custom-software-development",
    description: "Tailor-made software solutions that address your unique business challenges and streamline operations.",
    features: ["Enterprise Software", "CRM & ERP Systems", "SaaS Development", "Legacy Modernization"],
    icon: Layers,
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description: "User-centered design that is both beautiful and functional, ensuring your products are a joy to use.",
    features: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing"],
    icon: Palette,
  },
  {
    title: "Cloud & DevOps",
    slug: "cloud-devops",
    description: "Cloud-native solutions and automation that ensure your infrastructure is secure, scalable, and resilient.",
    features: ["Cloud Migration", "Infrastructure as Code", "CI/CD Pipelines", "Site Reliability Engineering"],
    icon: Cloud,
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-24 py-20 ">
      {/* Header Section */}
      <section className="px-6 text-center max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="flex flex-col gap-8"
        >
          <h1 className="text-sm font-bold tracking-[0.3em] text-gold uppercase">
            Our Capabilities
          </h1>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter">
            FULL-STACK <br />
            <span className="text-gold">EXCELLENCE.</span>
          </h2>
          <p className="text-xl text-foreground/60 leading-relaxed">
            We provide end-to-end technology solutions. From initial architectural 
            prototyping to global cloud deployment, we cover every byte of the 
            development lifecycle.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {allServices.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-12 p-12 rounded-[3rem] border border-primary/10 hover:border-primary/40 transition-all bg-secondary/[0.02] ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 flex flex-col gap-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-gold">
                  <service.icon size={32} />
                </div>
                <h3 className="text-4xl font-bold tracking-tight">
                  {service.title}
                </h3>
                <p className="text-lg text-foreground/60 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span className="font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-4 flex items-center gap-2 text-gold font-bold hover:gap-4 transition-all"
                >
                  Explore Details <ChevronRight size={20} />
                </Link>
              </div>
              <div className="flex-1 min-h-[300px] bg-background border border-primary/10 rounded-3xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-all scale-100 group-hover:scale-110">
                   <service.icon size={200} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Icons */}
      <section className="py-24 px-6 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: Code, title: "Clean Code", desc: "Maintainable, scalable, documented." },
              { icon: Zap, title: "High Speed", desc: "Optimized for performance." },
              { icon: Lock, title: "Elite Security", desc: "Bank-grade data protection." },
              { icon: BarChart, title: "Data Driven", desc: "Built with analytics in mind." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-4 text-center items-center">
                 <div className="w-20 h-20 rounded-full border border-primary/20 flex items-center justify-center text-gold mb-4 group-hover:bg-primary transition-all">
                    <item.icon size={32} />
                 </div>
                 <h4 className="font-bold text-lg">{item.title}</h4>
                 <p className="text-sm text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Prompt */}
      <section className="px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-10">
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter">
              NEED A CUSTOM <br />
              <span className="text-gold">TECH SOLUTION?</span>
            </h3>
            <Link 
              href="/contact"
              className="px-12 py-2 bg-primary text-black font-black text-xl rounded-full hover:bg-gold-hover transition-all mx-auto"
            >
              Contact Our Engineers
            </Link>
        </div>
      </section>
    </div>
  );
}
