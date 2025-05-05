"use client";

import { useState, useEffect, useRef } from "react";
import { urlFor } from "@/sanity/utilities/imageUrlBuilder";
import { FaXmark } from "react-icons/fa6";

export default function ImageDisplay({ images, currentIndex }) {
  const [showModal, setShowModal] = useState(false);
  const [isModalReady, setIsModalReady] = useState(false);
  const imageRefs = useRef([]);
  const containerRef = useRef();

  useEffect(() => {
    if (!showModal) setIsModalReady(false);
  }, [showModal]);

  useEffect(() => {
    if (showModal && isModalReady) {
      const scrollToImage = () => {
        if (imageRefs.current[currentIndex]) {
          imageRefs.current[currentIndex].scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      };

      const imagePromises = images.map((image) => {
        return new Promise((resolve) => {
          const imageEl = new Image();
          imageEl.src = urlFor(image).url();
          imageEl.onload = resolve;
        });
      });

      Promise.all(imagePromises).then(scrollToImage);
    }
  }, [showModal, isModalReady, currentIndex, images]);

  return (
    <>
      <Overlay setShowModal={setShowModal} />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        images={images}
        imageRefs={imageRefs}
        containerRef={containerRef}
        onReady={() => setIsModalReady(true)}
      />
    </>
  );
}

function Overlay({ setShowModal }) {
  return (
    <div
      className="absolute inset-0 hover:cursor-pointer"
      onClick={() => setShowModal(true)}></div>
  );
}

function Modal({
  showModal,
  setShowModal,
  images,
  imageRefs,
  containerRef,
  onReady,
}) {
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    if (showModal && loadedCount === images?.length) {
      onReady();
    }
  }, [loadedCount, showModal, images?.length, onReady]);

  return (
    <div className={`${!showModal && "hidden"} fixed inset-0 z-50 bg-zinc-950`}>
      <div
        ref={containerRef}
        className="overflow-y-scroll h-full px-6 sm:px-12 pt-6 sm:pt-12">
        <button
          className="absolute top-3 right-3 md:right-6 bg-zinc-50 w-8 h-8 rounded-full flex items-center justify-center hover:cursor-pointer"
          onClick={() => setShowModal(false)}>
          <FaXmark size={24} className="fill-zinc-950" />
        </button>
        {showModal &&
          images?.map((image, index) => (
            <img
              key={index}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              className="max-w-[1440px] mx-auto w-full h-auto mb-6 sm:mb-12"
              loading="eager"
              src={urlFor(image).url()}
              alt="Photography work photo"
              onLoad={() => setLoadedCount((prev) => prev + 1)}
            />
          ))}
      </div>
    </div>
  );
}
