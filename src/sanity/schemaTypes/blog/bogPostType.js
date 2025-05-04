export default {
  name: "blogPost",
  type: "document",
  title: "Blog Post",
  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      media: "image",
    },
  },
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (rule) => [
        rule.required().error("This field is required"),
        rule
          .max(96)
          .error("This field must be no more than 96 characters long"),
        rule
          .regex(/^(?!\s*$)/)
          .error("This field cannot be empty or contain only spaces"),
        rule
          .regex(/^[a-zA-Z0-9 -]*$/)
          .error("This field cannot contain special characters"),
      ],
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "It's recommended to click 'Generate' rather than entering a custom slug manually",
      options: {
        source: "title",
        maxLength: 96,
      },
      isUnique: true,
      validation: (rule) => [
        rule.custom((value, context) => {
          const { parent } = context;

          if (parent?.title && !value?.current) {
            return "This field is required";
          }

          if (value?.current) {
            return (
              /^[a-z0-9]+(-[a-z0-9]+)*$/.test(value.current) ||
              "Slug must contain only lowercase letters, numbers, and hyphens"
            );
          }

          return true;
        }),
      ],
      hidden: ({ document }) => {
        return (
          !document?.title ||
          /^\s*$/.test(document?.title?.toString()) ||
          /[^a-zA-Z0-9 -]/.test(document?.title?.toString())
        );
      },
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Strike", value: "strike-through" },
            ],
            annotations: [],
          },
        },
      ],
      validation: (rule) => [
        rule.required().error("This field is required"),
        rule.custom((blocks) => {
          if (!blocks || blocks.length === 0) return true;

          const text = blocks
            ?.map((block) =>
              block.children
                ?.filter((child) => child._type === "span")
                ?.map((span) => span.text)
                ?.join("")
            )
            ?.join("")
            ?.trim();

          return (
            text?.length > 0 ||
            "This field cannot be empty or contain only spaces"
          );
        }),
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (rule) => rule.required().error("This field is required"),
    },
    {
      name: "publishedAt",
      description:
        "Please use the date picker (calendar icon on the right) to select a date.",
      type: "date",
      title: "Published At",
      validation: (rule) => [rule.required().error("This field is required")],
    },
    {
      name: "sections",
      title: "Sections",
      type: "array",
      description:
        "For better SEO, structure your article into clear sections, each with a single main heading (H1). Avoid direct plagiarism—AI is fine, but copying content from other websites can hurt your Google ranking and may even risk your site being removed.",
      of: [
        {
          type: "blogSection",
        },
      ],
      validation: (rule) =>
        rule.min(1).error("At least one section is required"),
    },
  ],
};
