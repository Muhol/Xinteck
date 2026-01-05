"use client";

import { motion } from "framer-motion";
import { Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Post {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  tag: string;
  slug: string;
}

export function BlogGrid({ initialPosts }: { initialPosts: Post[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {initialPosts.map((post, i) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={`group cursor-pointer flex flex-col gap-6 p-8 rounded-[2.5rem] border border-primary/10 hover:border-primary/40 transition-all bg-secondary/[0.02] ${
            i === 0 ? "lg:col-span-2 flex-row md:flex-row items-center gap-12" : ""
          }`}
        >
          <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10" />
          
          <div className={`aspect-[4/3] rounded-3xl bg-secondary/10 border border-primary/10 flex items-center justify-center relative overflow-hidden ${
             i === 0 ? "flex-[0.6]" : "w-full"
          }`}>
             <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent group-hover:scale-110 transition-transform duration-700" />
             <span className="text-gold/5 font-black text-9xl">POST</span>
          </div>

          <div className={`flex flex-col gap-4 ${i === 0 ? "flex-1" : ""}`}>
             <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-[10px] font-bold text-gold uppercase tracking-widest border border-primary/20">
                   {post.tag}
                </span>
                <div className="flex items-center gap-2 text-xs text-foreground/30 font-medium">
                   <Clock size={12} /> {post.readTime}
                </div>
             </div>
             
             <h3 className={`font-black tracking-tight leading-tight group-hover:text-gold transition-colors ${
                i === 0 ? "text-4xl" : "text-2xl"
             }`}>
                {post.title}
             </h3>
             
             <p className="text-foreground/60 text-sm leading-relaxed line-clamp-2">
                {post.excerpt}
             </p>

             <div className="flex items-center justify-between mt-auto pt-6 border-t border-primary/10">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-gold">
                      {post.author.charAt(0)}
                   </div>
                   <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-tighter">{post.author}</span>
                      <span className="text-[9px] text-foreground/30 uppercase">{post.date}</span>
                   </div>
                </div>
                <ChevronRight className="text-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
             </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
