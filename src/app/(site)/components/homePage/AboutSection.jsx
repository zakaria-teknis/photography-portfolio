import { calculateImageHeight } from "../../utilities/mediaUtilities";
import { urlFor } from "@/sanity/utilities/imageUrlBuilder";
import Image from "next/image";

export default function AboutSection({ aboutImage, siteSettings }) {
  return (
    <section className="p-6 sm:p-12 bg-zinc-950 flex flex-col lg:flex-row items-center justify-center gap-7 sm:gap-14 lg:gap-28">
      <div className="relative w-fit shrink-0 order-2 lg:order-1">
        <Image
          className="relative w-auto rounded-2xl z-30"
          width={360}
          height={calculateImageHeight(aboutImage?.asset._ref, 360)}
          alt="Owner of the business"
          src={urlFor(aboutImage).url()}
        />
        <div
          className="absolute hidden sm:block z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border-4 border-zinc-50 rounded-2xl"
          style={{
            width: "calc(360px - 32px)",
            height: `calc(${calculateImageHeight(aboutImage?.asset._ref, 360)}px - 32px)`,
          }}></div>
        <div className="absolute hidden sm:block w-full h-full left-5 top-5 border-4 border-zinc-50 rounded-2xl"></div>
      </div>

      <div className="flex flex-col gap-5 order-1 lg:order-2 max-w-[45ch]">
        <h2 className="font-medium text-fluid-5xl">
          About
          <br />
          {siteSettings?.brandName}
        </h2>
        <p>
          I'm Sallaheddine Hajaoui — I provide professional photography and
          videography services in Agadir.
          <br />
          <br />
          My work covers events, businesses, and individuals, including photo
          editing and video editing. I handle event coverage, portrait
          photography, product photography, corporate videos, and promotional
          content.
          <br />
          <br />
          I work with event planners for event photography and videography, with
          bars and restaurants for food photography and promotional videos, and
          with businesses to create content for social media, websites, and
          marketing campaigns.
          <br />
          <br />
          If you're looking for high-quality photo and video services in Agadir
          at affordable prices, Agadir Productions is here to help.
        </p>
      </div>
    </section>
  );
}
