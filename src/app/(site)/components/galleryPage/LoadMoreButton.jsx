"use client";

import { useState, useEffect } from "react";
import { useGalleryPageStore } from "../../store/galleryPage";

export default function LoadMoreButton({ type, media }) {
  const { getContent, getContentCount } = useGalleryPageStore();
  const showButton = useGalleryPageStore()[`${type}${media}ButtonShow`];
  const isLoading = useGalleryPageStore(
    (state) => state.loadingStates[`${type}${media}`]
  );

  const [index, setIndex] = useState(() => (media === "Photography" ? 6 : 3));

  useEffect(() => {
    getContentCount(type, media);
  }, []);

  const handleLoadMore = () => {
    getContent(type, media, index);
    setIndex((prevIndex) => prevIndex + (media === "Photography" ? 6 : 2));
  };

  return (
    <>
      {showButton && (
        <button
          disabled={isLoading}
          onClick={handleLoadMore}
          className={`w-fit self-center font-bold px-6 py-3 rounded-sm border border-zinc-50 ${!isLoading && "hover:bg-zinc-50 hover:text-zinc-950 hover:cursor-pointer"}`}>
          {isLoading
            ? "Loading..."
            : media === "Photography"
              ? "Load More Photos"
              : "Load More Videos"}
        </button>
      )}
    </>
  );
}
