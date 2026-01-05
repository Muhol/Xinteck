import { getFileBySlug, getAllFilesMetadata } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ChevronLeft, Calendar, User, Clock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getAllFilesMetadata("blog");
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = await params;
  try {
    const { meta } = await getFileBySlug("blog", slug);
    return {
      title: meta.title,
      description: meta.excerpt,
    };
  } catch (e) {
    return { title: "Post Not Found" };
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  
  try {
    const { meta, content } = await getFileBySlug("blog", slug);

    return (
      <article className="py-20 px-6 max-w-4xl mx-auto">
        <Link 
          href="/blog" 
          className="flex items-center gap-2 text-gold font-bold mb-12 hover:-translate-x-2 transition-transform w-fit"
        >
          <ChevronLeft size={20} /> Back to Insights
        </Link>
        
        <header className="flex flex-col gap-8 mb-16">
          <div className="flex flex-wrap items-center gap-6 text-sm text-foreground/40 font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2 text-gold"><User size={16} /> {meta.author}</span>
            <span className="flex items-center gap-2"><Calendar size={16} /> {meta.date}</span>
            <span className="flex items-center gap-2"><Clock size={16} /> {meta.readTime}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
            {meta.title}
          </h1>
          
          <p className="text-2xl text-foreground/60 italic leading-relaxed">
            "{meta.excerpt}"
          </p>
        </header>

        <div className="prose prose-invert prose-gold max-w-none 
          prose-headings:font-black prose-headings:tracking-tighter prose-headings:italic
          prose-p:text-foreground/70 prose-p:text-lg prose-p:leading-relaxed
          prose-strong:text-gold prose-a:text-gold hover:prose-a:underline
          prose-blockquote:border-l-gold prose-blockquote:bg-primary/5 prose-blockquote:p-8 prose-blockquote:rounded-2xl
          prose-li:text-foreground/70 prose-img:rounded-[2rem] prose-img:border prose-img:border-primary/20"
        >
          <MDXRemote source={content} />
        </div>

        <div className="mt-24 pt-12 border-t border-primary/10 flex flex-col items-center gap-8 text-center text-foreground/40">
           <p className="max-w-md">
             Want more engineering insights? Join our mission to build the future of software.
           </p>
           <Link href="/blog" className="px-8 py-2 border border-primary/20 rounded-full hover:border-gold hover:text-gold transition-all font-bold">
              Explore More Posts
           </Link>
        </div>
      </article>
    );
  } catch (e) {
    notFound();
  }
}
