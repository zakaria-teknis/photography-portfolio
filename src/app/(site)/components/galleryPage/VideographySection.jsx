import MediaTypeSection from "./MediaTypeSection";

export default async function VideographySection({ videography }) {
  return (
    <section
      id="videography"
      className="pt-12 sm:pt-24 pb-6 sm:pb-12 px-5 sm:px-12 bg-zinc-950">
      <div className="mx-auto text-center flex flex-col gap-5 items-center mb-9 sm:mb-[72px]">
        <h2 className="text-fluid-5xl font-medium">Videography</h2>
        <p className="max-w-[45ch]">
          I also create videos—whether it's capturing a trip with friends,
          professional event coverage, or promotional content for local
          businesses.
        </p>
      </div>

      <div className="flex flex-col gap-9 sm:gap-[72px]">
        <MediaTypeSection
          content={videography.foodVideography}
          title="Food Videography"
          description="I help businesses boost their social media presence with videos that match their vision."
          type="food"
          media="Videography"
        />
        <MediaTypeSection
          content={videography.foodVideography}
          title="Event Videpgraphy"
          description="I also cover professional events like conferences, workshops, and team meetings."
          type="event"
          media="Videography"
        />
        <MediaTypeSection
          content={videography.foodVideography}
          title="Creative Videography"
          description="Explore my travel and camping videos, made to relive every moment."
          type="creative"
          media="Videography"
        />
      </div>
    </section>
  );
}
