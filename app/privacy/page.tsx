"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPage() {
  const lastUpdated = "January 3, 2026";

  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, fill out a contact form, or subscribe to our newsletter. This may include your name, email address, company name, and project details.",
      icon: Eye,
    },
    {
      title: "2. How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, to develop new products, and to protect Xinteck and our users.",
      icon: Shield,
    },
    {
      title: "3. Data Security",
      content: "We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.",
      icon: Lock,
    },
    {
      title: "4. Your Choices",
      content: "You may opt out of receiving promotional communications from us by following the instructions in those communications. You may also contact us to request access to or deletion of your personal information.",
      icon: FileText,
    },
  ];

  return (
    <div className="flex flex-col gap-24 py-20 px-6">
      <section className="max-w-4xl mx-auto w-full text-center flex flex-col gap-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="flex flex-col gap-6"
        >
          <h1 className="text-sm font-bold tracking-[0.3em] text-gold uppercase">
             Legal & Compliance
          </h1>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter">
            PRIVACY <span className="text-gold">POLICY.</span>
          </h2>
          <p className="text-xl text-foreground/60 leading-relaxed">
            Your privacy is our priority. This document explains how we handle your data 
            with the same level of integrity we apply to our engineering.
          </p>
          <div className="text-xs font-bold uppercase tracking-widest text-foreground/40 mt-4">
            Last Updated: {lastUpdated}
          </div>
        </motion.div>
      </section>

      <section className="max-w-4xl mx-auto w-full flex flex-col gap-12">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 md:p-12 rounded-[2.5rem] border border-primary/10 bg-secondary/[0.02] flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-gold shrink-0">
               <section.icon size={24} />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-black tracking-tight">{section.title}</h3>
              <p className="text-foreground/60 leading-relaxed">
                {section.content}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="max-w-4xl mx-auto w-full bg-primary/5 border border-primary/10 rounded-[3rem] p-12 text-center flex flex-col gap-8">
        <h3 className="text-3xl font-black tracking-tighter">QUESTIONS?</h3>
        <p className="text-foreground/60">
          If you have any questions about this Privacy Policy, please contact us at 
          <span className="text-gold font-bold ml-1">privacy@xinteck.com</span>
        </p>
      </section>
    </div>
  );
}
