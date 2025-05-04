import Image from "next/image";
import { calculateImageHeight } from "../../utilities/mediaUtilities";
import { urlFor } from "@/sanity/utilities/imageUrlBuilder";
import SanityContent from "../SanityContent";
import Link from "next/link";

export default function BlogPosts({ posts }) {
  return (
    <div
      className="grid gap-6 justify-center mb-6 sm:mb-12"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 346px))" }}>
      {posts?.map((post, index) => (
        <div
          className="grid grid-rows-subgrid row-span-4 gap-3 sm:gap-6"
          key={index}>
          <Image
            className="w-full rounded-lg"
            width={346}
            height={calculateImageHeight(post?.image.asset._ref, 346)}
            alt={`Blog post photo ${index + 1}`}
            src={urlFor(post?.image).url()}
          />
          <h3 className="text-fluid-3xl font-medium wrap-break-word hyphens-auto">
            {post?.title}
          </h3>
          <SanityContent content={post?.description} />
          <Link href={`/blog/${post.slug.current}`} className="underline">
            Learn more...
          </Link>
        </div>
      ))}
    </div>
  );
}
