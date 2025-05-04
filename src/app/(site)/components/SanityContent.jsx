import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/utilities/imageUrlBuilder";
import { calculateImageHeight } from "../utilities/mediaUtilities";
import Image from "next/image";

const components = {
  // Block Styling
  block: {
    h1: ({ children }) => (
      <h2 className="text-fluid-4xl mt-8 mb-6 font-medium wrap-break-word hyphens-auto">
        {children}
      </h2>
    ),
    h2: ({ children }) => (
      <h3 className="text-fluid-3xl mt-7 mb-5 font-medium wrap-break-word hyphens-auto">
        {children}
      </h3>
    ),
    h3: ({ children }) => (
      <h4 className="text-fluid-2xl mt-6 mb-4 font-medium wrap-break-word hyphens-auto">
        {children}
      </h4>
    ),
    h4: ({ children }) => (
      <h5 className="text-fluid-xl mt-5 mb-3 font-medium wrap-break-word hyphens-auto">
        {children}
      </h5>
    ),
    h5: ({ children }) => (
      <h6 className="text-fluid-xl mt-4 mb-2 font-medium wrap-break-word hyphens-auto">
        {children}
      </h6>
    ),
    normal: ({ children }) => (
      <p className="wrap-break-word hyphens-auto">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="italic wrap-break-word hyphens-auto">
        {children}
      </blockquote>
    ),
  },

  // Custom Marks
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        className="text-zinc-200 underline"
        target="_blank"
        rel="noopener noreferrer">
        {children}
      </a>
    ),
  },

  // List Handling
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 my-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 my-4">{children}</ol>
    ),
  },

  // List Items
  listItem: {
    bullet: ({ children }) => (
      <li className="wrap-break-word hyphens-auto">{children}</li>
    ),
    number: ({ children }) => (
      <li className="wrap-break-word hyphens-auto">{children}</li>
    ),
  },

  // Custom Types (e.g., images)
  types: {
    image: ({ value }) => (
      <div className="w-full max-w-[552px] my-6">
        <Image
          src={urlFor(value).url()}
          alt="Blog post image"
          width={552}
          height={calculateImageHeight(value.asset._ref, 552)}
          className="w-full rounded-2xl"
        />
        {/*value.caption && (
          <figcaption className="mt-2 text-sm text-zinc-500 text-center">
            {value.caption}
          </figcaption>
        )*/}
      </div>
    ),

    code: ({ value }) => (
      <pre className="my-6">
        <code>{value.code}</code>
      </pre>
    ),
  },
};

export default function SanityContent({ content }) {
  return <PortableText value={content} components={components} />;
}
