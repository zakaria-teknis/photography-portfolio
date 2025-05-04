import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

export default function CTASection({ title, description, buttonText }) {
  return (
    <section className="px-6 sm:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-16">
      <div className="flex flex-col gap-5">
        <h2 className="text-zinc-950 font-medium text-fluid-5xl">{title}</h2>
        <p className="text-zinc-950 font-medium">{description}</p>
      </div>

      <Link
        href="#contact"
        className="shrink-0 w-full sm:w-fit bg-zinc-900 hover:bg-zinc-950 font-bold rounded-sm border border-zinc-900 hover:border-zinc-950 flex items-center justify-center gap-2.5 px-6 py-3">
        {buttonText}
        <FaArrowRightLong size={20} />
      </Link>
    </section>
  );
}
