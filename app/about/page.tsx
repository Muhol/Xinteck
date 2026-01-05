"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Users, Rocket, Target, Shield } from "lucide-react";

const stats = [
  { label: "Successful Projects", value: "250+" },
  { label: "Global Clients", value: "85+" },
  { label: "Awards Won", value: "12" },
  { label: "Tech Experts", value: "45" },
];

const values = [
  {
    title: "Excellence",
    desc: "We don't just build software; we craft digital masterpieces with unmatched precision.",
    icon: Target,
  },
  {
    title: "Innovation",
    desc: "Staying ahead of the curve is in our DNA. We embrace emerging techs early.",
    icon: Rocket,
  },
  {
    title: "Partnership",
    desc: "Your success is our success. We work as an extension of your core team.",
    icon: Users,
  },
  {
    title: "Integrity",
    desc: "Transparent communication and absolute security are the foundations of our work.",
    icon: Shield,
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-24 py-20">
      {/* Hero Section */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <h1 className="text-sm font-bold tracking-[0.3em] text-gold uppercase">
              Our Story
            </h1>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
              ENGINEERING THE <br />
              <span className="text-gold">DIGITAL FRONTIER.</span>
            </h2>
            <p className="text-xl text-foreground/60 leading-relaxed">
              Founded in 2018, Xinteck was born from a simple realization: 
              most technology solutions lack the soul of design and the 
              rigor of elite engineering. We closed that gap.
            </p>
            <div className="flex flex-col gap-4">
              {[
                "Pioneering cloud-native architectures",
                "World-class UI/UX design philosophy",
                "Agile development at enterprise scale",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold" size={20} />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="relative">
            <div className="aspect-[4/5] bg-secondary/10 rounded-[3rem] border border-primary/20 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-gold/5 font-black text-[15rem] -rotate-12">SINCE-18</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-black">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-4xl md:text-6xl font-black tracking-tighter">
                {stat.value}
              </div>
              <div className="text-sm font-bold uppercase tracking-widest opacity-60 mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-6">
            <h2 className="text-sm font-bold tracking-[0.3em] text-gold uppercase">
              Core Philosophy
            </h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter">
              WHAT DRIVES <span className="text-foreground/40">US.</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-secondary/5 border border-primary/10 hover:border-primary/40 transition-all flex flex-col gap-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-gold">
                  <value.icon size={24} />
                </div>
                <h4 className="text-xl font-bold">{value.title}</h4>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-6">
            <h2 className="text-sm font-bold tracking-[0.3em] text-gold uppercase">
              The Architects
            </h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter">
              DRIVING <span className="text-foreground/40">INNOVATION.</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Dr. Elena Vance", role: "Chief Technology Officer", expertise: "Cloud Systems & AI" },
              { name: "Marcus Aurelius", role: "Head of Engineering", expertise: "Distributed Systems" },
              { name: "Zarah Chen", role: "Creative Director", expertise: "Premium Design Systems" },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col gap-6"
              >
                <div className="aspect-square bg-secondary/10 rounded-[2.5rem] border border-primary/10 overflow-hidden relative group-hover:border-primary/40 transition-all">
                   <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-all scale-100 group-hover:scale-110">
                      <Users size={150} />
                   </div>
                </div>
                <div className="flex flex-col gap-2">
                   <h4 className="text-2xl font-black tracking-tight">{member.name}</h4>
                   <p className="text-gold font-bold text-sm uppercase tracking-widest">{member.role}</p>
                   <p className="text-foreground/40 text-xs font-medium uppercase mt-2">Expertise: {member.expertise}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto bg-background border border-primary/20 rounded-[3rem] p-12 md:p-24 text-center">
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 max-w-4xl mx-auto">
              PASSIONATE ABOUT <span className="text-gold">CODE?</span>
            </h3>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto mb-10">
              We are always looking for visionary engineers and designers to join our elite squad.
            </p>
            <button className="px-10 py-5 bg-primary text-black font-black rounded-2xl hover:bg-gold-hover transition-all">
              Join the Team
            </button>
        </div>
      </section>
    </div>
  );
}
