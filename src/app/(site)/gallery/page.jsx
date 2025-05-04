import PhotographySection from "../components/galleryPage/PhotographySection";
import CTASection from "../components/CTASection";
import VideographySection from "../components/galleryPage/VideographySection";
import ContactSection from "../components/ContactSection";

export default function GalleryPage() {
  return (
    <>
      <div className="flex items-center gap-5 sm:gap-10 pt-6 sm:pt-12 pb-8 sm:pb-16">
        <h1 className="text-fluid-8xl text-zinc-950">Gallery</h1>
        <div className="w-full h-[1px] bg-zinc-500"></div>
      </div>

      <PhotographySection />
      <CTASection
        title="Let's Work Together"
        description="Need photos for a portrait, event, or your business? Message me!"
        buttonText="Send Message"
      />
      <VideographySection />
      <ContactSection />
    </>
  );
}
