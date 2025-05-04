import { FaArrowRightLong } from "react-icons/fa6";
import VideoDisplay from "../VideoDisplay";
import Link from "next/link";

export default function VideographySection({ videographyWork }) {
  return (
    <section className="w-full columns-1 md:columns-2 gap-3">
      <div className="w-full max-w-[546px] flex flex-col gap-3 sm:gap-6 mb-4 sm:mb-8">
        <h3 className="text-fluid-4xl font-medium">Explore My Newest Videos</h3>
        <p className="max-w-[45ch]">
          Like what you're seeing? Explore my full collection for more.
        </p>
        <Link
          href="/gallery#videography"
          className="w-fit px-6 py-3 hover:text-zinc-950 hover:bg-zinc-50 flex items-center justify-center gap-2.5 rounded-sm border border-zinc-50 font-bold">
          See More Work
          <FaArrowRightLong size={20} />
        </Link>
      </div>
      {videographyWork?.map((videoId, index) => (
        <VideoDisplay key={index} videoId={videoId} />
      ))}
    </section>
  );
}
