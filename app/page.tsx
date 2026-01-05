import { Hero } from "@/components/sections/Hero";
import { ServicesFeatured } from "@/components/sections/ServicesFeatured";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesFeatured />
      
      {/* Featured Project Teaser */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary p-1 md:p-12 rounded-[3rem] overflow-hidden">
            <div className="bg-background rounded-[2.8rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 flex flex-col gap-6">
                <h2 className="text-sm font-bold tracking-[0.2em] text-gold uppercase">
                  Featured Case Study
                </h2>
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter">
                  REVOLUTIONIZING <br />
                  <span className="text-gold">GLOBAL FINTECH.</span>
                </h3>
                <p className="text-foreground/60 text-lg leading-relaxed">
                  We helped a leading financial institution scale their infrastructure
                  to handle 10k transactions per second with 99.99% uptime.
                </p>
                <button className="w-fit px-8 py-2 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-black transition-all">
                  Read Full Story
                </button>
              </div>
              <div className="flex-1 relative">
                <div className="aspect-square bg-secondary/10 rounded-3xl border border-primary/20 flex items-center justify-center">
                  <span className="text-gold/20 font-black text-[10rem]">01</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-secondary/[0.02] border-y border-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 flex flex-col gap-4">
            <h2 className="text-sm font-bold tracking-[0.3em] text-gold uppercase">
              Client Feedback
            </h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter">
              TRUSTED BY <span className="text-foreground/40">LEVEL UNLOCKED.</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Xinteck transformed our legacy infrastructure into a high-speed cloud powerhouse. Their attention to detail is unmatched.",
                author: "Sarah Jenkins",
                role: "CTO, Fintech Solutions",
              },
              {
                text: "The UI/UX design provided by Xinteck isn't just beautiful—it actually increased our conversion rate by 40% in three months.",
                author: "David Chen",
                role: "Founder, Aura Health",
              },
              {
                text: "Professional, efficient, and technically superior. Xinteck is the only team we trust for our enterprise software needs.",
                author: "Elena Rodriguez",
                role: "EVP of Ops, Global Logistics",
              },
            ].map((testimonial, i) => (
              <div 
                key={i}
                className="p-10 rounded-[2.5rem] bg-background border border-primary/10 flex flex-col gap-6 relative"
              >
                <div className="text-gold font-black text-6xl absolute top-4 right-8 opacity-10">"</div>
                <p className="text-foreground/70 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex flex-col gap-1 mt-auto">
                  <span className="font-bold text-lg">{testimonial.author}</span>
                  <span className="text-gold text-xs font-bold uppercase tracking-widest">{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 flex flex-col gap-4">
            <h2 className="text-sm font-bold tracking-[0.3em] text-gold uppercase">
              Common Questions
            </h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter">
              CLEAR <span className="text-foreground/40">ANSWERS.</span>
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            {[
              {
                q: "What is your typical project timeline?",
                a: "Timelines vary depending on complexity. Small projects take 4-6 weeks, while large-scale enterprise solutions typically range from 3-6 months.",
              },
              {
                q: "Do you offer post-launch support?",
                a: "Absolutely. We provide dedicated support packages for maintenance, updates, and 24/7 monitoring to ensure 99.99% uptime.",
              },
              {
                q: "Can you work with our existing internal team?",
                a: "Yes, we often act as an extension of internal teams, providing specialized expertise in cloud architecture, DevOps, or UI/UX.",
              },
            ].map((faq, i) => (
              <div 
                key={i}
                className="p-8 rounded-3xl border border-primary/10 bg-secondary/5 flex flex-col gap-4"
              >
                <h4 className="text-xl font-bold flex justify-between items-center">
                  {faq.q}
                </h4>
                <p className="text-foreground/60 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-8">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
            READY TO BUILD THE <br />
            <span className="text-gold underline decoration-primary/30">NEXT BIG THING?</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Our team of world-class engineers and designers are ready to bring
            your vision to life with precision and speed.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <button className="px-10 py-2 bg-primary text-black font-black rounded-full shadow-2xl hover:bg-gold-hover transition-all">
              Book a Discovery Call
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
