import { SITE_SETTINGS_QUERY } from "@/sanity/utilities/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/utilities/imageUrlBuilder";
import Image from "next/image";
import { calculateImageHeight } from "../utilities/mediaUtilities";
import ResponsiveNavBar from "./ResponsiveNavBar";
import Link from "next/link";

export default async function NavBar() {
  let siteSettings = null;

  try {
    siteSettings = await client.fetch(SITE_SETTINGS_QUERY);
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    throw error;
  }

  return (
    <header className="relative z-50">
      <div className="max-w-7xl px-5 sm:px-10 py-4 mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10">
            <Image
              width={40}
              className="w-full"
              alt={`${siteSettings?.brandName} logo`}
              height={calculateImageHeight(siteSettings?.logo.asset._ref, 40)}
              src={urlFor(siteSettings?.logo).url()}
            />
          </div>
          <span className="text-fluid-xl">{siteSettings?.brandName}</span>
        </Link>

        <nav className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-1/2">
          <ul className="flex items-center gap-8">
            <li>
              <Link className="hover:text-zinc-500" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-zinc-500" href="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link className="hover:text-zinc-500" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:text-zinc-500" href="/#contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          href="/#contact"
          className="hidden lg:inline-block bg-zinc-900 hover:bg-zinc-950 text-zinc-50 rounded-sm border border-zinc-900 hover:border-zinc-950 px-6 py-3">
          Let's Talk
        </Link>
        <ResponsiveNavBar siteSettings={siteSettings} />
      </div>
    </header>
  );
}
