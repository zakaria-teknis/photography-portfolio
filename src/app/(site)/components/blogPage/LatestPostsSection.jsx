import SanityContent from "../SanityContent";
import Image from "next/image";
import { urlFor } from "@/sanity/utilities/imageUrlBuilder";
import { calculateImageHeight } from "../../utilities/mediaUtilities";
import Link from "next/link";

export default function LatestPostsSection({ posts }) {
  return (
    <section>
      <h2 className="text-fluid-4xl font-medium mb-6">Latest Articles</h2>

      <div
        className="grid gap-6 justify-center mb-6 sm:mb-12"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 346px))",
        }}>
        {posts.map((post, index) => (
          <div
            key={index}
            className="grid grid-rows-subgrid row-span-4 gap-3 sm:gap-6">
            <Image
              className="w-full rounded-lg"
              width={346}
              height={calculateImageHeight(post.image.asset._ref, 346)}
              alt="Blog post image"
              src={urlFor(post.image).url()}
            />
            <h3 className="text-fluid-3xl font-medium wrap-break-word hyphens-auto">
              {post.title}
            </h3>
            <SanityContent content={post.description} />
            <Link
              href={`/blog/${post.slug.current}`}
              className="underline">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
