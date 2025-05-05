const blogSectionType = {
  name: "blogSection",
  type: "object",
  title: "Blog Section",
  fields: [
    {
      name: "content",
      title: "Content",
      type: "array",
      description:
        "Important: Do NOT skip heading levels. Follow H1 with H2, H2 with H3, and so on. It's okay to go back up (e.g., H2 to H1), but never skip ahead (e.g., H1 to H3 or H2 to H5).",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 1", value: "h1" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Heading 4", value: "h4" },
            { title: "Heading 5", value: "h5" },
            { title: "Quote", value: "blockquote" },
          ],
        },
        { type: "image" },
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
        rule.custom((blocks = []) => {
          let firstHeadingFound = false;
          let currentLevel = 1;
          const errors = [];

          blocks.forEach((block, index) => {
            if (block.style && block.style.startsWith("h")) {
              const level = parseInt(block.style.replace("h", ""));

              if (!firstHeadingFound) {
                if (level === 1) {
                  firstHeadingFound = true;
                }
                if (level !== 1) {
                  if (errors.length === 0) {
                    errors.push(
                      `First heading must be H1 (block ${index + 1})`
                    );
                  }
                }
              }

              if (firstHeadingFound) {
                if (level > currentLevel + 1) {
                  errors.push(
                    `Cannot skip from H${currentLevel} to H${level} (block ${index + 1})`
                  );
                }
                currentLevel = level;
              }
            }
          });

          if (errors.length > 0) {
            return {
              message: `Heading errors: ${errors.join(". ")}`,
              paths: [],
            };
          }

          return true;
        }),
      ],
    },
  ],
};

export default blogSectionType;
