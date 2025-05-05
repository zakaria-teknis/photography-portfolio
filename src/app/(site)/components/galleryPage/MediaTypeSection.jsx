import { urlFor } from "@/sanity/utilities/imageUrlBuilder";
import { calculateImageHeight } from "../../utilities/mediaUtilities";
import Image from "next/image";
import ImageDisplay from "../ImageDisplay";
import VideoDisplay from "../VideoDisplay";
import LoadMoreButton from "./LoadMoreButton";
import FetchedContent from "./FetchedContent";

export default function MediaTypeSection({
  content,
  title,
  description,
  type,
  media,
}) {
  return (
    <section className="flex flex-col gap-6 sm:gap-12">
      <div className="flex flex-col md:gap-3">
        {media === "Photography" && (
          <>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-3">
              <div className="w-full max-w-[360px] flex flex-col gap-3 sm:gap-6 mb-4 sm:mb-8">
                <h3 className="text-fluid-4xl font-medium">{title}</h3>
                <p className="max-w-[30ch]">{description}</p>
              </div>
              {content.map((image, index) => (
                <div key={index} className="relative w-full">
                  <Image
                    priority
                    className="w-full mb-3"
                    width={360}
                    height={calculateImageHeight(image.asset._ref, 360)}
                    alt="Photography work photo"
                    src={urlFor(image).url()}
                  />
                  <ImageDisplay images={content} currentIndex={index} />
                </div>
              ))}
            </div>
            <FetchedContent type={type} media={media} />
            {content.length >= 6 && (
              <LoadMoreButton type={type} media={media} />
            )}
          </>
        )}

        {media === "Videography" && (
          <>
            <div className="columns-1 md:columns-2 gap-3">
              <div className="w-full max-w-[546px] flex flex-col gap-3 sm:gap-6 mb-4 sm:mb-8">
                <h3 className="text-fluid-4xl font-medium">{title}</h3>
                <p className="max-w-[45ch]">{description}</p>
              </div>
              {content?.map((videoId, index) => (
                <VideoDisplay key={index} videoId={videoId} />
              ))}
            </div>
            <FetchedContent type={type} media={media} />
            {content.length >= 3 && (
              <LoadMoreButton type={type} media={media} />
            )}
          </>
        )}
      </div>
    </section>
  );
}
