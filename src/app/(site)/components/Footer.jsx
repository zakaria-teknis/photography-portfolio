import { sanityFetch } from "@/sanity/lib/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/utilities/queries";
import Link from "next/link";

export default async function Footer() {
  const { data: siteSettings } = await sanityFetch({
    query: SITE_SETTINGS_QUERY,
  });

  return (
    <footer className="max-w-7xl px-5 sm:px-10 mx-auto flex flex-col md:flex-row items-center justify-between gap-6 py-6 sm:py-12">
      <p className="order-2 md:order-1">
        <span className="font-semibold">{siteSettings.brandName}</span> © 2025. All Rights Reserved.
      </p>
      <nav className="order-1 md:order-2">
        <ul className="font-semibold flex flex-wrap justify-center items-center gap-6">
          <li>
            <Link className="hover:cursor-pointer hover:text-zinc-500" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:cursor-pointer hover:text-zinc-500"
              href="/gallery">
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className="hover:cursor-pointer hover:text-zinc-500"
              href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="hover:cursor-pointer hover:text-zinc-500"
              href="/#contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
