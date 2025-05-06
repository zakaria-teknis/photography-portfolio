import "./(site)/globals.css";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/utilities/imageUrlBuilder";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const siteSettings = await client.fetch(
    `*[_type == "siteSettings"][0]{title}`
  );
  const metadata = await client.fetch(
    `*[_type == "metadata"][0]{description, favicon256x256, favicon16x16, favicon32x32, favicon48x48, favicon96x96, favicon180x180, favicon192x192, ogImage1200x630, ogImage400x400}`
  );

  return {
    metadataBase: new URL("https://sallaheddine-hajaoui-portfolio.vercel.app"),
    title: {
      template: `${siteSettings?.title} | %s`,
      default: siteSettings?.title,
      absolute: siteSettings?.title,
    },
    description: metadata?.description,
    keywords: [
      "Sallaheddine Hajaoui",
      "Photography Services",
      "Videography Services",
      "Photo Editing",
      "Video Editing",
      "Freelance Photographer",
      "Freelance Videographer",
      "Freelance Editor",
      "Professional Photography",
      "Professional Videography",
      "Photography in Agadir",
      "Videography in Agadir",
      "Editing Services in Agadir",
      "Sallaheddine Hajaoui Portfolio",
    ],
    icons: {
      icon: [
        metadata?.favicon256x256 && {
          url: urlFor(metadata.favicon256x256).url(),
          type: "image/png",
        },
        metadata?.favicon256x256 && {
          url: urlFor(metadata.favicon256x256).url(),
          sizes: "256x256",
          type: "image/png",
        },
        metadata?.favicon16x16 && {
          url: urlFor(metadata.favicon16x16).url(),
          sizes: "16x16",
          type: "image/png",
        },
        metadata?.favicon32x32 && {
          url: urlFor(metadata.favicon32x32).url(),
          sizes: "32x32",
          type: "image/png",
        },
        metadata?.favicon48x48 && {
          url: urlFor(metadata.favicon48x48).url(),
          sizes: "48x48",
          type: "image/png",
        },
        metadata?.favicon96x96 && {
          url: urlFor(metadata.favicon96x96).url(),
          sizes: "96x96",
          type: "image/png",
        },
        metadata?.favicon192x192 && {
          url: urlFor(metadata.favicon192x192).url(),
          sizes: "192x192",
          type: "image/png",
        },
      ].filter(Boolean),
      apple: metadata?.favicon180x180
        ? [
            {
              url: urlFor(metadata.favicon180x180).url(),
              sizes: "180x180",
              type: "image/png",
            },
          ]
        : [],
    },

    openGraph: {
      title: siteSettings?.title,
      description: metadata?.description,
      url: "https://sallaheddine-hajaoui-portfolio.vercel.app",
      siteName: "Sallaheddine Hajaoui Portfolio",
      images: [
        metadata?.ogImage1200x630 && {
          url: urlFor(metadata?.ogImage1200x630).url(),
          width: 1200,
          height: 630,
        },
        metadata?.ogImage400x400 && {
          url: urlFor(metadata?.ogImage400x400).url(),
          width: 400,
          height: 400,
          alt: "My custom alt",
        },
      ].filter(Boolean),
      locale: "en_US",
      type: "website",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
