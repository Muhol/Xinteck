"use client";

import { motion } from "framer-motion";
import { Gavel, FileCheck, AlertCircle, Ban } from "lucide-react";

export default function TermsPage() {
  const lastUpdated = "January 3, 2026";

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using Xinteck's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
      icon: FileCheck,
    },
    {
      title: "2. Use License",
      content: "Permission is granted to temporarily download one copy of the materials on Xinteck's website for personal, non-commercial transitory viewing only.",
      icon: Gavel,
    },
    {
      title: "3. Limitations",
      content: "In no event shall Xinteck or its suppliers be liable for any damages arising out of the use or inability to use the materials on Xinteck's website.",
      icon: AlertCircle,
    },
    {
      title: "4. Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.",
      icon: Ban,
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
            TERMS OF <span className="text-gold">SERVICE.</span>
          </h2>
          <p className="text-xl text-foreground/60 leading-relaxed">
            Please read these terms carefully before using our platform or services. 
            We believe in transparency and fair collaboration.
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
        <h3 className="text-3xl font-black tracking-tighter">LEGAL INQUIRIES</h3>
        <p className="text-foreground/60">
          For any legal concerns regarding these terms, please reach out to 
          <span className="text-gold font-bold ml-1">legal@xinteck.com</span>
        </p>
      </section>
    </div>
  );
}
