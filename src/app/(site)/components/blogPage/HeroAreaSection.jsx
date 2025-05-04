import SanityContent from "../SanityContent";
import Image from "next/image";
import { urlFor } from "@/sanity/utilities/imageUrlBuilder";
import { calculateImageHeight } from "../../utilities/mediaUtilities";
import Link from "next/link";

export default function HeroAreaSection({ mainPost, heroAreaPosts }) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-8">
        <div className="shrink-0 w-full lg:w-1/2 rounded-2xl overflow-hidden">
          <Image
            className="w-full"
            width={536}
            height={calculateImageHeight(mainPost.image.asset._ref, 536)}
            alt="Blog post image"
            src={urlFor(mainPost.image).url()}
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-3 sm:gap-4 lg:gap-8">
          <h2 className="text-fluid-4xl max-w-[45ch] font-medium wrap-break-word hyphens-auto">
            {mainPost.title}
          </h2>
          <SanityContent content={mainPost.description} />
          <Link
            href={`/blog/${mainPost.slug.current}`}
            className="underline">
            Read more
          </Link>
        </div>
      </div>

      <div
        className="grid gap-6 justify-center"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 346px))",
        }}>
        {heroAreaPosts.map((post, index) => (
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
            <h2 className="text-fluid-3xl font-medium wrap-break-word hyphens-auto">
              {post.title}
            </h2>
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
