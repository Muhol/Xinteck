"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image?: string;
  slug: string;
}

export function ProjectGrid({ initialProjects }: { initialProjects: Project[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      {initialProjects.map((project, i) => (
        <motion.div
           key={project.slug}
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: i * 0.1 }}
           className="group flex flex-col gap-8"
        >
           <div className="aspect-[16/10] bg-secondary/5 rounded-[3rem] border border-primary/10 overflow-hidden relative group-hover:border-primary/40 transition-all cursor-pointer">
              <Link href={`/portfolio/${project.slug}`} className="absolute inset-0 z-10" />
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-all scale-100 group-hover:scale-110">
                 <span className="text-[12rem] font-black">{project.image || "X"}</span>
              </div>
              <div className="absolute inset-0 p-12 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 relative z-20">
                 <div className="flex gap-3">
                    <button className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center hover:bg-gold-hover transition-all">
                       <ExternalLink size={20} />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-background border border-primary/20 text-foreground flex items-center justify-center hover:border-gold transition-all">
                       <Github size={20} />
                    </button>
                 </div>
              </div>
           </div>

           <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                 <span className="text-gold font-bold text-sm tracking-widest uppercase">{project.category}</span>
                 <div className="flex gap-2">
                    {project.tags?.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-foreground/30 uppercase">{tag}</span>
                    ))}
                 </div>
              </div>
              <h3 className="text-3xl font-black tracking-tight flex items-center justify-between group-hover:text-gold transition-colors">
                 {project.title}
                 <ChevronRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-foreground/60 text-lg leading-relaxed line-clamp-2">
                 {project.description}
              </p>
           </div>
        </motion.div>
      ))}
    </div>
  );
}
