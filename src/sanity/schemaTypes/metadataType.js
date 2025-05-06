import { client } from "../lib/client";

const metadataType = {
  name: "metadata",
  title: "Metadata",
  type: "document",
  __experimental_hidden: true,
  groups: [
    {
      name: "general",
      title: "General",
      default: true,
    },
    {
      name: "favicon",
      title: "Favicon",
    },
    {
      name: "openGraph",
      title: "Open Graph",
    },
  ],
  fields: [
    {
      name: "dscription",
      title: "Description (Required)",
      type: "string",
      group: "general",
      description:
        "This description appears in search engine results and when your website is shared on social media.",
      validation: (rule) => [
        rule.required().error("This field is required"),
        rule.max(90).error("This field must be 90 characters or less"),
        rule
          .regex(/^(?!\s*$)/)
          .error("This field cannot be empty or contain only spaces"),
      ],
    },

    {
      name: "favicon256x256",
      title: "Favicon 256x256 (Required)",
      type: "image",
      options: { accept: "png" },
      group: "favicon",
      description:
        "Please upload a PNG file. This favicon is required, make sure the image matches the dimensions listed above so it displays correctly.",
      validation: (rule) => [
        rule.required().error("This field is required"),
        rule.custom(async (image) => {
          if (!image?.asset?._ref) return true;
          const asset = await client.getDocument(image.asset._ref);
          if (asset?.mimeType !== "image/png") {
            return "Only PNG images are allowed.";
          }
          return true;
        }),
      ],
    },
    {
      name: "favicon16x16",
      title: "Favicon 16x16 (Optional)",
      type: "image",
      options: { accept: "image/png" },
      description:
        "This favicon is optional, but adding it improves your site's SEO. Make sure the image matches the dimensions listed above so it displays correctly.",
      group: "favicon",
      validation: (rule) =>
        rule.custom(async (image) => {
          if (!image?.asset?._ref) return true;
          const asset = await client.getDocument(image.asset._ref);
          if (asset?.mimeType !== "image/png") {
            return "Only PNG images are allowed.";
          }
          return true;
        }),
    },
    {
      name: "favicon32x32",
      title: "Favicon 32x32 (Optional)",
      type: "image",
      options: { accept: "image/png" },
      description:
        "This favicon is optional, but adding it improves your site's SEO. Make sure the image matches the dimensions listed above so it displays correctly.",
      group: "favicon",
      validation: (rule) =>
        rule.custom(async (image) => {
          if (!image?.asset?._ref) return true;
          const asset = await client.getDocument(image.asset._ref);
          if (asset?.mimeType !== "image/png") {
            return "Only PNG images are allowed.";
          }
          return true;
        }),
    },
    {
      name: "favicon48x48",
      title: "Favicon 48x48 (Optional)",
      type: "image",
      options: { accept: "image/png" },
      description:
        "This favicon is optional, but adding it improves your site's SEO. Make sure the image matches the dimensions listed above so it displays correctly.",
      group: "favicon",
      validation: (rule) =>
        rule.custom(async (image) => {
          if (!image?.asset?._ref) return true;
          const asset = await client.getDocument(image.asset._ref);
          if (asset?.mimeType !== "image/png") {
            return "Only PNG images are allowed.";
          }
          return true;
        }),
    },
    {
      name: "favicon96x96",
      title: "Favicon 96x96 (Optional)",
      type: "image",
      options: { accept: "image/png" },
      description:
        "This favicon is optional, but adding it improves your site's SEO. Make sure the image matches the dimensions listed above so it displays correctly.",
      group: "favicon",
      validation: (rule) =>
        rule.custom(async (image) => {
          if (!image?.asset?._ref) return true;
          const asset = await client.getDocument(image.asset._ref);
          if (asset?.mimeType !== "image/png") {
            return "Only PNG images are allowed.";
          }
          return true;
        }),
    },
    {
      name: "favicon180x180",
      title: "Favicon 180x180 (Optional)",
      type: "image",
      options: { accept: "image/png" },
      description:
        "This favicon is optional, but adding it improves your site's SEO. Make sure the image matches the dimensions listed above so it displays correctly.",
      group: "favicon",
      validation: (rule) =>
        rule.custom(async (image) => {
          if (!image?.asset?._ref) return true;
          const asset = await client.getDocument(image.asset._ref);
          if (asset?.mimeType !== "image/png") {
            return "Only PNG images are allowed.";
          }
          return true;
        }),
    },
    {
      name: "favicon192x192",
      title: "Favicon 192x192 (Optional)",
      type: "image",
      options: { accept: "image/png" },
      description:
        "This favicon is optional, but adding it improves your site's SEO. Make sure the image matches the dimensions listed above so it displays correctly.",
      group: "favicon",
      validation: (rule) =>
        rule.custom(async (image) => {
          if (!image?.asset?._ref) return true;
          const asset = await client.getDocument(image.asset._ref);
          if (asset?.mimeType !== "image/png") {
            return "Only PNG images are allowed.";
          }
          return true;
        }),
    },

    {
      name: "ogImage1200x630",
      title: "Image 1200x630 (Required)",
      type: "image",
      options: { accept: "png" },
      group: "openGraph",
      description:
        "Please upload a PNG file. This image appears when your website is shared on social networks like WhatsApp or Facebook. Make sure the image matches the dimensions listed above so it displays correctly.",
      validation: (rule) => [
        rule.required().error("This field is required"),
        rule.custom(async (image) => {
          if (!image?.asset?._ref) return true;
          const asset = await client.getDocument(image.asset._ref);
          if (asset?.mimeType !== "image/png") {
            return "Only PNG images are allowed.";
          }
          return true;
        }),
      ],
    },
    {
      name: "ogImage400x400",
      title: "Image 400x400 (Optional)",
      type: "image",
      options: { accept: "png" },
      group: "openGraph",
      description:
        "Similar to the image above, but used specifically for WhatsApp. Ensure it follows the dimensions listed above for proper display.",
      validation: (rule) => [
        rule.custom(async (image) => {
          if (!image?.asset?._ref) return true;
          const asset = await client.getDocument(image.asset._ref);
          if (asset?.mimeType !== "image/png") {
            return "Only PNG images are allowed.";
          }
          return true;
        }),
      ],
    },
  ],
};

export default metadataType;
