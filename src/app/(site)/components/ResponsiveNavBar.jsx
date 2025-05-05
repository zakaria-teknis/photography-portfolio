"use client";

import { useState, useEffect } from "react";
import { urlFor } from "@/sanity/utilities/imageUrlBuilder";
import Image from "next/image";
import { calculateImageHeight } from "../utilities/mediaUtilities";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import Link from "next/link";

export default function ResponsiveNavBar({siteSettings}) {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && showMenu) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [showMenu]);

  return (
    <>
      <button
        onClick={() => setShowMenu((prev) => !prev)}
        aria-label="Show menu"
        className="group inline-block lg:hidden hover:cursor-pointer">
        <FaBars size={24} />
      </button>

      <div
        className={`${!showMenu && "hidden"} z-50 absolute top-0 right-0 bg-zinc-50 w-full max-w-96 h-dvh`}>
        <div className="flex px-5 sm:px-10 py-4 justify-between">
          {siteSettings && (
            <Image
              width={40}
              alt={`${siteSettings.brandName} logo`}
              height={calculateImageHeight(siteSettings.logo?.asset._ref, 40)}
              src={urlFor(siteSettings?.logo).url()}
            />
          )}
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            aria-label="Close menu"
            className="group hover:cursor-pointer">
            <FaXmark size={32} />
          </button>
        </div>

        <div className="flex flex-col p-5 sm:p-10 gap-10">
          <nav className="flex justify-between">
            <ul className="flex flex-col gap-10">
              <li>
                <Link
                  onClick={() => setShowMenu((prev) => !prev)}
                  href="/"
                  className="hover:cursor-pointer hover:text-zinc-500">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setShowMenu((prev) => !prev)}
                  href="/blog"
                  className="hover:cursor-pointer hover:text-zinc-500">
                  Blog
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-10">
              <li>
                <Link
                  onClick={() => setShowMenu((prev) => !prev)}
                  href="/gallery"
                  className="hover:cursor-pointer hover:text-zinc-500">
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setShowMenu((prev) => !prev)}
                  href="/#contact"
                  className="hover:cursor-pointer hover:text-zinc-500">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <Link
            onClick={() => setShowMenu((prev) => !prev)}
            href="/#contact"
            className="w-fit bg-zinc-900 text-zinc-50 rounded-sm border border-zinc-900 px-6 py-3 hover:cursor-pointer hover:bg-zinc-950">
            Let's Talk
          </Link>
        </div>
      </div>
    </>
  );
}
