import { client } from "@/sanity/lib/client";
import { BLOG_PAGE_QUERY } from "@/sanity/utilities/queries";
import HeroAreaSection from "../components/blogPage/HeroAreaSection";
import AuthorsChoiceSection from "../components/blogPage/AuthorsChoiceSection";
import LatestPostsSection from "../components/blogPage/LatestPostsSection";

export default async function BlogPage() {
  let posts = null;

  try {
    posts = await client.fetch(BLOG_PAGE_QUERY);
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    throw error;
  }
  return (
    <>
      <div className="flex items-center gap-5 sm:gap-10 pt-6 sm:pt-12 pb-8 sm:pb-16">
        <h1 className="text-fluid-8xl text-zinc-950">Blog</h1>
        <div className="w-full h-[1px] bg-zinc-500"></div>
      </div>

      <section className="pt-7 sm:pt-14 pb-6 sm:pb-12 px-6 sm:px-12 bg-zinc-950 rounded-2xl flex flex-col gap-8 sm:gap-12">
        <HeroAreaSection
          mainPost={posts?.mainBlogPost}
          heroAreaPosts={posts?.heroAreaBlogPosts}
        />
        {posts.authorsChoiceBlogPost && (
          <AuthorsChoiceSection post={posts.authorsChoiceBlogPost} />
        )}
        {posts.latestBlogPosts.length > 0 && (
          <LatestPostsSection posts={posts.latestBlogPosts} />
        )}
      </section>
    </>
  );
}
