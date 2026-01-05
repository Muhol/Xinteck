"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Connection lost.");
      
      setSubmitted(true);
    } catch (err) {
      setError("The signal was lost. Please try again or contact hello@xinteck.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="p-16 rounded-[4rem] bg-background border border-primary/20 shadow-2xl flex flex-col items-center gap-8 max-w-2xl"
        >
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-gold animate-bounce">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-5xl font-black tracking-tighter italic uppercase">Mission Launched.</h2>
          <p className="text-xl text-foreground/60 leading-relaxed">
            Your inquiry has reached our command center. Our engineers are reviewing 
            the coordinates and will reach out within <span className="text-gold font-bold">4 hours</span>.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="px-10 py-2 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-black transition-all"
          >
            Send Another Signal
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-24 py-20 px-6">
      {/* Header */}
      <section className="max-w-7xl mx-auto w-full text-center lg:text-left grid lg:grid-cols-2 gap-16 items-end">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="flex flex-col gap-8"
        >
          <h1 className="text-sm font-bold tracking-[0.3em] text-gold uppercase">
            Let's Collaborate
          </h1>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
            START THE <br />
            <span className="text-gold">CONVERSATION.</span>
          </h2>
          <p className="text-xl text-foreground/60 leading-relaxed max-w-xl">
            Have a complex problem? An ambitious idea? Or just want to say hello? 
            Our team is ready to listen and build.
          </p>
        </motion.div>
        
        <div className="hidden lg:flex flex-col gap-4 text-right items-end">
           <div className="flex items-center gap-3 text-gold font-bold text-lg">
             <Clock size={24} />
             Response Time: &lt; 4 Hours
           </div>
           <p className="text-foreground/40 italic">
             Our engineers are currently online and available in Silicon Valley, London, and Dubai timezones.
           </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto w-full grid lg:grid-cols-3 gap-16">
        {/* Info Cards */}
        <div className="flex flex-col gap-8 lg:col-span-1">
          {[
            {
              title: "Email Us",
              value: "hello@xinteck.com",
              icon: Mail,
              sub: "For general inquiries and partnerships",
            },
            {
              title: "Call Us",
              value: "+1 (555) 000-0000",
              icon: Phone,
              sub: "Mon - Fri, 9am - 6pm EST",
            },
            {
              title: "Visit Us",
              value: "Silicon Valley HQ",
              icon: MapPin,
              sub: "123 Innovation Drive, CA 94043",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-secondary/5 border border-primary/10 hover:border-primary/40 transition-all flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-gold">
                <item.icon size={24} />
              </div>
              <h4 className="font-bold text-xl">{item.title}</h4>
              <p className="font-black text-gold text-lg overflow-hidden text-ellipsis">
                {item.value}
              </p>
              <p className="text-sm text-foreground/40">{item.sub}</p>
            </motion.div>
          ))}

          {/* Map Teaser */}
          <div className="aspect-video bg-secondary/20 rounded-3xl border border-primary/10 overflow-hidden relative grayscale hover:grayscale-0 transition-all cursor-pointer">
             <div className="absolute inset-0 flex items-center justify-center">
                <Globe size={64} className="text-gold opacity-20 animate-pulse" />
             </div>
             <div className="absolute bottom-4 left-4 bg-background px-4 py-2 rounded-lg text-xs font-bold border border-primary/20 text-foreground/40">
                OFFLINE MAP CACHE
             </div>
          </div>
        </div>

        {/* Form */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="lg:col-span-2 p-8 md:p-16 rounded-[3rem] bg-background border border-primary/10 shadow-2xl relative"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold uppercase tracking-widest text-foreground/40">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe"
                  className="bg-secondary/5 border border-primary/20 rounded-xl px-6 py-4 focus:border-primary outline-none transition-all placeholder:text-foreground/20"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold uppercase tracking-widest text-foreground/40">Work Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@company.com"
                  className="bg-secondary/5 border border-primary/20 rounded-xl px-6 py-4 focus:border-primary outline-none transition-all placeholder:text-foreground/20"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold uppercase tracking-widest text-foreground/40">Service Type</label>
                <select name="service" className="bg-secondary/5 border border-primary/20 rounded-xl px-6 py-4 focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                   <option>Web Development</option>
                   <option>Mobile App Dev</option>
                   <option>Custom Software</option>
                   <option>UI/UX Design</option>
                   <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold uppercase tracking-widest text-foreground/40">Budget Range</label>
                <select name="budget" className="bg-secondary/5 border border-primary/20 rounded-xl px-6 py-4 focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                   <option>$10k - $25k</option>
                   <option>$25k - $50k</option>
                   <option>$50k - $100k</option>
                   <option>$100k+</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-bold uppercase tracking-widest text-foreground/40">Project Summary</label>
              <textarea 
                name="message"
                rows={5}
                required
                placeholder="Tell us about your mission..."
                className="bg-secondary/5 border border-primary/20 rounded-xl px-6 py-4 focus:border-primary outline-none transition-all placeholder:text-foreground/20 resize-none"
              />
            </div>

            {error && <p className="text-red-500 font-bold text-sm italic">{error}</p>}

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-fit px-12 py-2 bg-primary text-black font-black text-xl rounded-full hover:bg-gold-hover transition-all flex items-center justify-center gap-4 shadow-xl shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? (
                <>Launching... <Loader2 className="animate-spin" size={24} /></>
              ) : (
                <>Launch Inquiry <Send size={24} className="group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </form>
        </motion.div>
      </section>

      {/* Social Bar */}
      <section className="max-w-7xl mx-auto w-full flex flex-col items-center gap-12 border-t border-primary/10 pt-24 text-center">
         <h4 className="font-bold text-xl opacity-40">Prefer direct messaging?</h4>
         <div className="flex flex-wrap justify-center gap-6">
            <button className="flex items-center gap-3 px-8 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] font-bold hover:bg-[#25D366]/20 transition-all">
               <MessageCircle size={24} /> WhatsApp Business
            </button>
            <button className="flex items-center gap-3 px-8 py-2 rounded-full bg-[#0077b5]/10 border border-[#0077b5]/20 text-[#0077b5] font-bold hover:bg-[#0077b5]/20 transition-all">
               <Globe size={24} /> LinkedIn Career
            </button>
         </div>
      </section>
    </div>
  );
}
