import SanityContent from "../SanityContent";
import Image from "next/image";
import { urlFor } from "@/sanity/utilities/imageUrlBuilder";
import { calculateImageHeight } from "../../utilities/mediaUtilities";
import Link from "next/link";

export default function AuthorsChoiceSection({ post }) {
  return (
    <section>
      <h2 className="text-fluid-4xl font-medium mb-6">Author's Choice</h2>

      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-8">
        <div className="shrink-0 w-full lg:w-1/2 rounded-2xl overflow-hidden">
          <Image
            className="w-full"
            width={536}
            height={calculateImageHeight(post.image.asset._ref, 536)}
            alt="Blog post image"
            src={urlFor(post.image).url()}
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-3 sm:gap-4 lg:gap-8">
          <h3 className="text-fluid-4xl max-w-[45ch] font-medium wrap-break-word hyphens-auto">
            {post.title}
          </h3>
          <SanityContent content={post.description} />
          <Link
            href={`/blog/${post.slug.current}`}
            className="underline">
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
}
