import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { calculateImageHeight } from "../../utilities/mediaUtilities";
import { urlFor } from "@/sanity/utilities/imageUrlBuilder";
import SanityContent from "../../components/SanityContent";

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "blogPost"]{ "slug": slug.current }`);

  return slugs.map((s) => ({ slug: s.slug }));
}

export const revalidate = 60;

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  let post = null;

  try {
    const res = await client.fetch(
      `*[_type == "blogPost" && slug.current == $slug][0]`,
      { slug }
    );
    post = res;

    if (!post) return notFound();
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    throw error;
  }

  return (
    <div className="min-h-[85vh] bg-zinc-950 px-6 sm:px-12 pt-7 sm:pt-14 pb-6 sm:pb-12 rounded-2xl flex flex-col gap-6 sm:gap-12">
      <h1 className="font-medium text-fluid-7xl">{post.title}</h1>
      <div className="w-full">
        <Image
          src={urlFor(post.image).url()}
          alt="Blog post image"
          width={1104}
          height={calculateImageHeight(post.image.asset._ref, 1104)}
          className="w-full rounded-2xl"
        />
      </div>
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
        {post.sections.map((section, index) => (
          <section key={index}>
            <SanityContent content={section.content} />
          </section>
        ))}
      </div>
    </div>
  );
}
