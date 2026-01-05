import { getAllFilesMetadata, ProjectMeta } from "@/lib/mdx";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { motion } from "framer-motion";
import Link from "next/link";

export const metadata = {
  title: "Portfolio | Our Work",
  description: "Explore our portfolio of premium software solutions and digital experiences.",
};

export default async function PortfolioPage() {
  const projects = await getAllFilesMetadata<ProjectMeta>("projects");

  return (
    <div className="flex flex-col gap-24 py-20">
      {/* Header */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text-sm font-bold tracking-[0.3em] text-gold uppercase text-center w-full">
              Proof of Excellence
            </h1>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter">
              OUR <span className="text-gold">LEGACY.</span>
            </h2>
            <p className="text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
              We don't talk about features; we talk about results. 
              Explore the digital landscapes we've shaped for industry leaders and disruptors.
            </p>
          </div>
        </div>
      </section>

      {/* Stats / Impact */}
      <section className="bg-secondary/[0.02] border-y border-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { val: "$2B+", label: "Client Revenue Generated" },
              { val: "100M+", label: "Users Impacted" },
              { val: "99.9%", label: "Uptime Guaranteed" },
              { val: "500+", label: "Github Repos Delivered" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2 text-center">
                 <div className="text-3xl md:text-5xl font-black text-gold tracking-tighter">{item.val}</div>
                 <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">{item.label}</div>
              </div>
            ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6">
         <div className="max-w-7xl mx-auto">
            <ProjectGrid initialProjects={projects} />
         </div>
      </section>

      {/* Collaboration CTA */}
      <section className="px-6 mb-20 text-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-12 pt-20 border-t border-primary/10">
           <h3 className="text-4xl md:text-7xl font-black tracking-tighter">
              HAVE A VISION? <br />
              <span className="text-gold">LET'S CODE IT.</span>
           </h3>
           <Link 
             href="/contact"
             className="px-12 py-2 bg-primary text-black font-black text-xl rounded-full hover:bg-gold-hover transition-all mx-auto shadow-2xl shadow-primary/20"
           >
             Start Your Journey
           </Link>
        </div>
      </section>
    </div>
  );
}
