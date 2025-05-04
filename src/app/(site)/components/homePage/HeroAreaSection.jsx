import Image from "next/image";
import { calculateImageHeight } from "../../utilities/mediaUtilities";
import { urlFor } from "@/sanity/utilities/imageUrlBuilder";
import { FaWhatsapp } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

export default function HeroAreaSection({ heroAreaImage, siteSettings }) {
  return (
    <section className="pt-6 sm:pt-12 px-5 sm:px-12 pb-5 sm:pb-12 bg-zinc-950 rounded-t-2xl flex flex-col lg:flex-row items-center gap-10 sm:gap:20">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <h1 className="text-fluid-7xl font-medium">
            Photography & Videography Services in Agadir
          </h1>
          <p>
            I'm Sallaheddine Hajaoui, a photographer, videographer, and editor
            based in Agadir, Morocco. I help businesses elevate their
            marketing—on social media and beyond—through clean visuals, creative
            storytelling, and affordable pricing.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
          <Link
            href="#contact"
            className="flex items-center justify-center text-zinc-950 hover:text-zinc-50 px-9 py-3 bg-zinc-50 hover:bg-transparent font-bold border border-zinc-50 rounded-sm">
            Let's Talk
          </Link>
          <a
            href={`https://wa.me/${siteSettings?.phoneNumber}`}
            className="group bg-[#25D366] hover:bg-transparent flex items-center justify-center gap-2 text-white hover:text-[#25D366] px-6 py-3 font-bold rounded-sm border border-[#25D366]">
            <FaWhatsapp size={24} />
            Chat on WhatsApp
          </a>
        </div>
        <ul className="flex flex-wrap gap-3 sm:gap-5">
          <li>
            <a
              aria-label="Behance link"
              href={siteSettings?.behanceLink}
              className="group flex items-center justify-center border border-zinc-50 rounded-sm w-10 h-10 hover:bg-zinc-50">
              <FaBehance size={23} className="group-hover:fill-zinc-950" />
            </a>
          </li>
          <li>
            <a
              aria-label="Linkedin link"
              href={siteSettings?.linkedinLink}
              className="group flex items-center justify-center border border-zinc-50 rounded-sm w-10 h-10 hover:bg-zinc-50">
              <FaLinkedinIn size={20} className="group-hover:fill-zinc-950" />
            </a>
          </li>
          <li>
            <a
              aria-label="Instagram link"
              href={siteSettings?.instagramLink}
              className="group flex items-center justify-center border border-zinc-50 rounded-sm w-10 h-10 hover:bg-zinc-50">
              <FaInstagram size={20} className="group-hover:fill-zinc-950" />
            </a>
          </li>
        </ul>
      </div>

      <div className="relative w-fit shrink-0 lg:bottom-24">
        <Image
          priority
          className="relative w-auto rounded-2xl z-40"
          width={384}
          height={calculateImageHeight(heroAreaImage?.asset._ref, 384)}
          alt="Owner of the business"
          src={urlFor(heroAreaImage).url()}
        />
        <div className="absolute hidden sm:block z-30 w-full h-full right-6 top-6 border-4 border-zinc-50 rounded-2xl"></div>
      </div>
    </section>
  );
}
