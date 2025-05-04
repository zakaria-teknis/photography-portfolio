import BlogPosts from "./BlogPosts";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

export default function BlogSection({ blogPosts }) {
  return (
    <section className="px-6 sm:px-12 pt-12 sm:pt-24 pb-6 sm:pb-12 bg-zinc-950">
      <div className="flex flex-col gap-5 items-center mb-9 sm:mb-[72px]">
        <h2 className="text-fluid-5xl font-medium">Blog</h2>
        <p className="max-w-[45ch] text-center">
          Learn how we work and improve your skills in photography, videography,
          and editing
        </p>
      </div>
      <BlogPosts posts={blogPosts} />
      <Link
        href="/blog"
        className="w-fit mx-auto px-6 py-3 hover:bg-zinc-50 hover:text-zinc-950 flex items-center justify-center gap-2.5 rounded-sm border border-zinc-50 font-bold">
        See More Articles
        <FaArrowRightLong size={20} />
      </Link>
    </section>
  );
}
