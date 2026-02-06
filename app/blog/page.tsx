import { BlogGrid } from "@/components/sections/BlogGrid";
import { BlogNewsletter } from "@/components/sections/BlogNewsletter";
import { VideoScrollLayout } from "@/components/services/VideoScrollLayout";
import { VIDEO_STATS } from "@/lib/videoStats";
import { BlogMeta, getAllFilesMetadata } from "@/lib/mdx";
import { Search } from "lucide-react";

export const metadata = {
  title: "Insights & Innovation | Xinteck Blog",
  description: "Deep dives into technology, engineering, and the future of software.",
};

export default async function BlogPage() {
  const posts = await getAllFilesMetadata<BlogMeta>("blog");

  // Sort by date (descending)
  const sortedPosts = posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <VideoScrollLayout videoSrc={VIDEO_STATS.portfolio.src} videoStats={VIDEO_STATS.portfolio}>
      <div className="flex flex-col gap-12 md:gap-24 py-12 md:py-20">
        {/* Hero Section */}
        <section className="px-6 pt-12 md:pt-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center gap-6 md:gap-8 bg-white/30 dark:bg-black/80 backdrop-blur-xl border border-primary/10 rounded-[10px] p-6 md:p-16 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
              <div className="flex flex-col gap-4 md:gap-6">
                <h1 className="text-xs md:text-sm font-bold tracking-[0.3em] text-gold uppercase">
                  Insights & Innovation
                </h1>
                <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-foreground">
                  THE <span className="text-gold">X-LABS</span> BLOG.
                </h2>
                <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                  Deep dives into the technology we build, the challenges we overcome, 
                  and the future we are engineering today.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative max-w-xl w-full mt-4 md:mt-8">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground/30" size={20} />
                <input 
                  type="text" 
                  placeholder="Search tech insights..."
                  className="w-full bg-white/50 dark:bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-[10px] px-16 py-4 md:py-5 text-foreground placeholder:text-foreground/20 focus:border-primary outline-none transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:mb-16 text-center bg-white/30 dark:bg-black/80 backdrop-blur-xl border border-primary/10 rounded-[10px] p-6 md:p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
              <h3 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-foreground mb-4">
                Latest Articles
              </h3>
              <h4 className="text-3xl md:text-6xl font-black tracking-tighter text-foreground">
                TECH <span className="text-foreground/40">INSIGHTS.</span>
              </h4>
            </div>
            <BlogGrid initialPosts={sortedPosts} />

            {/* Pagination */}
            <div className="flex justify-center mt-12 md:mt-20 gap-4">
              <button className="px-6 py-3 rounded-[10px] border border-primary/20 text-foreground/60 font-bold hover:text-gold hover:border-gold transition-all bg-white/30 dark:bg-black/80 backdrop-blur-xl">
                Previous
              </button>
              <button className="w-12 h-12 rounded-[10px] bg-primary text-black font-black flex items-center justify-center">
                1
              </button>
              <button className="w-12 h-12 rounded-[10px] border border-primary/10 text-foreground/60 font-bold flex items-center justify-center hover:bg-primary/5 transition-all bg-white/30 dark:bg-black/80">
                2
              </button>
              <button className="px-6 py-3 rounded-[10px] border border-primary/20 text-foreground/60 font-bold hover:text-gold hover:border-gold transition-all bg-white/30 dark:bg-black/80 backdrop-blur-xl">
                Next
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="px-6 mb-12 md:mb-20">
          <div className="max-w-7xl mx-auto">
            <BlogNewsletter />
          </div>
        </section>
      </div>
    </VideoScrollLayout>
  );
}
