import PhotographySection from "../components/galleryPage/PhotographySection";
import CTASection from "../components/CTASection";
import VideographySection from "../components/galleryPage/VideographySection";
import ContactSection from "../components/ContactSection";
import { sanityFetch } from "@/sanity/lib/live";
import { GALLERY_PAGE_PHOTOGRAPHY_QUERY } from "@/sanity/utilities/queries";
import { GALLERY_PAGE_VIDEOGRAPHY_QUERY } from "@/sanity/utilities/queries";

export default async function GalleryPage() {
  let photography = null;
  let videography = null;

  try {
    const photographyRes = await sanityFetch({
      query: GALLERY_PAGE_PHOTOGRAPHY_QUERY,
    });
    photography = photographyRes.data;

    const videographyRes = await sanityFetch({
      query: GALLERY_PAGE_VIDEOGRAPHY_QUERY,
    });
    videography = videographyRes.data;
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    throw error;
  }

  return (
    <>
      <div className="flex items-center gap-5 sm:gap-10 pt-6 sm:pt-12 pb-8 sm:pb-16">
        <h1 className="text-fluid-8xl text-zinc-950">Gallery</h1>
        <div className="w-full h-[1px] bg-zinc-500"></div>
      </div>

      <PhotographySection photography={photography} />
      <CTASection
        title="Let's Work Together"
        description="Need photos for a portrait, event, or your business? Message me!"
        buttonText="Send Message"
      />
      <VideographySection videography={videography} />
      <ContactSection />
    </>
  );
}
