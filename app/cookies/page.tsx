"use client";

import { motion } from "framer-motion";
import { Cookie, Info, Settings, Trash } from "lucide-react";

export default function CookiePage() {
  const lastUpdated = "January 3, 2026";

  const sections = [
    {
      title: "1. What Are Cookies?",
      content: "Cookies are small text files that are stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience.",
      icon: Cookie,
    },
    {
      title: "2. How We Use Cookies",
      content: "We use cookies to analyze our traffic, personalize content, and provide social media features. We also share information about your use of our site with our social media and analytics partners.",
      icon: Info,
    },
    {
      title: "3. Cookie Preferences",
      content: "You can manage your cookie preferences through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.",
      icon: Settings,
    },
    {
      title: "4. Deleting Cookies",
      content: "You can delete all cookies that are already on your device by clearing your browser's browsing history.",
      icon: Trash,
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
            COOKIE <span className="text-gold">POLICY.</span>
          </h2>
          <p className="text-xl text-foreground/60 leading-relaxed">
            We use cookies to enhance your experience and build better digital products. 
            Learn how we manage these bits of data.
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
        <h3 className="text-3xl font-black tracking-tighter">DATA PREFERENCES</h3>
        <p className="text-foreground/60">
          Want to know more about how we process data? Visit our
          <a href="/privacy" className="text-gold font-bold ml-1 hover:underline">Privacy Policy</a>.
        </p>
      </section>
    </div>
  );
}
