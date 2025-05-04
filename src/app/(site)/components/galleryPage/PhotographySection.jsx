import { sanityFetch } from "@/sanity/lib/live";
import { GALLERY_PAGE_PHOTOGRAPHY_QUERY } from "@/sanity/utilities/queries";
import MediaTypeSection from "./MediaTypeSection";

export default async function PhotographySection() {
  const { data: photography } = await sanityFetch({
    query: GALLERY_PAGE_PHOTOGRAPHY_QUERY,
  });

  return (
    <section id="photography" className="py-12 sm:py-24 px-5 sm:px-12 bg-zinc-950 rounded-t-2xl">
      <div className="mx-auto text-center flex flex-col gap-5 items-center mb-9 sm:mb-[72px]">
        <h2 className="text-fluid-5xl font-medium">Photography</h2>
        <p className="max-w-[45ch]">
          Check out my work — from authentic portraits to behind-the-scenes
          kitchen shots, crafted to bring your story to life on social media.
        </p>
      </div>

      <div className="flex flex-col gap-9 sm:gap-[72px]">
        <MediaTypeSection
          content={photography.foodPhotography}
          title="Food Photography"
          description="I help restaurants, bars, and venues stand out on social media with my photography."
          type="food"
          media="Photography"
        />
        <MediaTypeSection
          content={photography.eventPhotography}
          title="Event Photography"
          description="I also do event photography, covering professional settings like conferences and workshops."
          type="event"
          media="Photography"
        />
        <MediaTypeSection
          content={photography.creativePhotography}
          title="Creative Photography"
          description="My work includes portrait shots, whether for a CV, social media, or capturing a special moment."
          type="creative"
          media="Photography"
        />
      </div>
    </section>
  );
}
