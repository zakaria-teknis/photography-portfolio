import Image from "next/image";
import { calculateImageHeight } from "../../utilities/mediaUtilities";
import { urlFor } from "@/sanity/utilities/imageUrlBuilder";
import ImageDisplay from "../ImageDisplay";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

export default function PhotographySection({ photographyWork }) {
  return (
    <section className="w-full columns-1 md:columns-2 lg:columns-3 gap-3">
      <div className="w-full max-w-[360px] flex flex-col gap-3 sm:gap-6 mb-4 sm:mb-8">
        <h3 className="text-fluid-4xl font-medium">Explore My Newest Photos</h3>
        <p className="max-w-[30ch]">
          Like what you're seeing? Explore my full collection for more.
        </p>
        <Link
          href="/gallery#photography"
          className="w-fit px-6 py-3 hover:bg-zinc-50 hover:text-zinc-950 flex items-center justify-center gap-2.5 rounded-sm border border-zinc-50 font-bold">
          See More Work
          <FaArrowRightLong size={20} />
        </Link>
      </div>
      {photographyWork?.map((image, index) => (
        <div key={index} className="relative w-full">
          <Image
            className="w-full mb-3"
            width={360}
            height={calculateImageHeight(image.asset._ref, 360)}
            alt={`Photography work photo ${index + 1}`}
            src={urlFor(image).url()}
          />
          <ImageDisplay images={photographyWork} currentIndex={index} />
        </div>
      ))}
    </section>
  );
}
