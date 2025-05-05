import { calculateImageHeight } from "../utilities/mediaUtilities";
import { urlFor } from "@/sanity/utilities/imageUrlBuilder";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { SITE_SETTINGS_QUERY } from "@/sanity/utilities/queries";
import { client } from "@/sanity/lib/client";


export default async function ContactSection() {
  let siteSettings = null;

  try {
    siteSettings = await client.fetch(SITE_SETTINGS_QUERY);
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    throw error;
  }

  return (
    <section id="contact" className="p-6 sm:p-12 bg-zinc-950 rounded-b-2xl">
      <div className="flex flex-col gap-5 items-center mb-9 sm:mb-[72px]">
        <h2 className="text-fluid-5xl font-medium">Contact</h2>
        <p className="max-w-[45ch] text-center">
          Looking to collaborate or hire? Just fill out the short form below —
          I'll get back to you within a day.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-12">
        <div className="w-full max-w-[400px] flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10">
              <Image
                className="w-full"
                width={40}
                height={calculateImageHeight(siteSettings.logo.asset._ref, 40)}
                alt="Brand logo"
                src={urlFor(siteSettings.logo).url()}
              />
            </div>
            <p className="text-fluid-xl font-medium">
              {siteSettings.brandName}
            </p>
          </div>
          <h3 className="text-fluid-4xl font-medium max-w-[15ch]">
            Let's turn your vision into stunning visuals
          </h3>
          <p>Agadir, Morocco</p>
        </div>

        <div className="w-full max-w-[400px] flex flex-col gap-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
