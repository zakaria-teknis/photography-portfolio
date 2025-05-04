"use client";

import { useGalleryPageStore } from "../../store/galleryPage";
import Image from "next/image";
import { calculateImageHeight } from "../../utilities/mediaUtilities";
import { urlFor } from "@/sanity/utilities/imageUrlBuilder";
import ImageDisplay from "../ImageDisplay";
import VideoDisplay from "../VideoDisplay";

export default function FetchedContent({ type, media }) {
  let content = [];

  if (media === "Photography") {
    content = useGalleryPageStore()[`${type}${media}Images`];
  }

  if (media === "Videography") {
    content = useGalleryPageStore()[`${type}${media}Videos`];
  }

  const imageBatches = [];
  for (let i = 0; i < content.length; i += 6) {
    imageBatches.push(content.slice(i, i + 6));
  }

  const videoBatches = [];
  for (let i = 0; i < content.length; i += 2) {
    videoBatches.push(content.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col">
      {media === "Photography" &&
        imageBatches.map((batch, batchIndex) => (
          <div
            key={batchIndex}
            className="columns-1 md:columns-2 lg:columns-3 gap-3">
            {batch.map((image, index) => (
              <div key={index} className="relative w-full">
                <Image
                  className="w-full mb-3"
                  width={360}
                  height={calculateImageHeight(image.asset._ref, 360)}
                  alt={`Photography work photo ${batchIndex * 6 + index + 1}`}
                  src={urlFor(image).url()}
                />
                <ImageDisplay
                  images={content}
                  currentIndex={batchIndex * 6 + index}
                />
              </div>
            ))}
          </div>
        ))}

      {media === "Videography" &&
        videoBatches.map((batch, batchIndex) => (
          <div key={batchIndex} className="columns-1 md:columns-2 gap-3">
            {batch.map((videoId, index) => (
              <VideoDisplay key={batchIndex * 2 + index} videoId={videoId} />
            ))}
          </div>
        ))}
    </div>
  );
}
