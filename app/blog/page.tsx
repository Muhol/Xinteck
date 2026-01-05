import { getAllFilesMetadata, BlogMeta } from "@/lib/mdx";
import { Search, Calendar, User, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { BlogNewsletter } from "@/components/sections/BlogNewsletter";
import { BlogGrid } from "@/components/sections/BlogGrid";

export const metadata = {
  title: "Insights & Innovation",
  description: "Deep dives into technology, engineering, and the future of software.",
};

export default async function BlogPage() {
  const posts = await getAllFilesMetadata<BlogMeta>("blog");

  // Sort by date (descending)
  const sortedPosts = posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="flex flex-col gap-24 py-20 px-6">
      {/* Header */}
      <section className="max-w-7xl mx-auto w-full text-center flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-sm font-bold tracking-[0.3em] text-gold uppercase">
             Insights & Innovation
          </h1>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter">
            THE <span className="text-gold">X-LABS</span> BLOG.
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Deep dives into the technology we build, the challenges we overcome, 
            and the future we are engineering today.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto w-full mt-12">
           <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground/30" size={20} />
           <input 
             type="text" 
             placeholder="Search tech insights..."
             className="w-full bg-secondary/5 border border-primary/10 rounded-2xl px-16 py-5 focus:border-primary outline-none transition-all placeholder:text-foreground/20"
           />
        </div>
      </section>

      {/* Blog Grid - Separated into a client component for animations if needed */}
      <section className="max-w-7xl mx-auto w-full">
         <BlogGrid initialPosts={sortedPosts} />

         {/* Pagination Placeholder */}
         <div className="flex justify-center mt-20 gap-4">
            <button className="px-6 py-2 rounded-full border border-primary/20 text-foreground/40 font-bold hover:text-gold hover:border-gold transition-all">Previous</button>
            <button className="w-12 h-12 rounded-full bg-primary text-black font-black flex items-center justify-center">1</button>
            <button className="w-12 h-12 rounded-full border border-primary/10 text-foreground/40 font-bold flex items-center justify-center hover:bg-primary/5">2</button>
            <button className="px-6 py-2 rounded-full border border-primary/20 font-bold hover:text-gold hover:border-gold transition-all">Next</button>
         </div>
      </section>

      <BlogNewsletter />
    </div>
  );
}
