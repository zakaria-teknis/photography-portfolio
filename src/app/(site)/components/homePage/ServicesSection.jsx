import { FaCamera } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

export default function ServicesSection() {
  return (
    <section className="px-6 sm:px-12 pt-6 sm:pt-12 pb-12 sm:pb-24 bg-zinc-950 flex flex-col items-center gap-9 sm:gap-[72px]">
      <div className="flex flex-col gap-5 items-center">
        <h2 className="text-fluid-5xl font-medium">Services</h2>
        <p className="max-w-[45ch] text-center">
          From event photography to creative videography and editing, you'll
          find an affordable plan tailored to your needs.
        </p>
      </div>

      <ul className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
        <li className="flex flex-col items-center gap-4 sm:w-72">
          <FaCamera size={48} />
          <h3 className="text-fluid-xl font-medium">Photography</h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-3">
              <FaCheck size={16} className="shrink-0" />
              Food photography
            </li>
            <li className="flex items-center gap-3">
              <FaCheck size={16} className="shrink-0" />
              Event photography
            </li>
            <li className="flex items-center gap-3">
              <FaCheck size={16} className="shrink-0" />
              Creative photography
            </li>
          </ul>
        </li>

        <li className="flex flex-col items-center gap-4 sm:w-72">
          <FaVideo size={54} />
          <h3 className="text-fluid-xl font-medium">Videography</h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-3">
              <FaCheck size={16} className="shrink-0" />
              Food videography
            </li>
            <li className="flex items-center gap-3">
              <FaCheck size={16} className="shrink-0" />
              Event videography
            </li>
            <li className="flex items-center gap-3">
              <FaCheck size={16} className="shrink-0" />
              Creative videography
            </li>
          </ul>
        </li>

        <li className="flex flex-col items-center gap-4 sm:w-72">
          <FaEdit size={48} />
          <h3 className="text-fluid-xl font-medium">Editing</h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-3">
              <FaCheck size={16} className="shrink-0" />
              Photo editing and retouching
            </li>
            <li className="flex items-center gap-3">
              <FaCheck size={16} className="shrink-0" />
              Cropping & resizing for platforms
            </li>
            <li className="flex items-center gap-3">
              <FaCheck size={16} className="shrink-0" />
              Video editing and post-production
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
