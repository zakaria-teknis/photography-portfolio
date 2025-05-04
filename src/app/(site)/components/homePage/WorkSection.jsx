import PhotographySection from "./PhotographySection";
import VideographySection from "./VideographySection";

export default function WorkSection({ photographyWork, videographyWork }) {
  return (
    <section className="px-6 sm:px-12 py-12 sm:py-24 bg-zinc-950">
      <div className="flex flex-col gap-5 items-center mb-9 sm:mb-[72px]">
        <h2 className="text-fluid-5xl font-medium">Work</h2>
        <p className="max-w-[45ch] text-center">
          Get a free sample of the photos and videos I craft with care.
        </p>
      </div>

      <div className="flex flex-col items-center gap-12 sm:gap-24">
        <PhotographySection photographyWork={photographyWork} />
        <VideographySection videographyWork={videographyWork} />
      </div>
    </section>
  );
}
