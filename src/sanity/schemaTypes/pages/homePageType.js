const homePageType = {
  name: "homePage",
  title: "Home Page",
  type: "document",
  __experimental_hidden: true,
  groups: [
    {
      name: "heroArea",
      title: "Hero Area",
      default: true,
    },
    {
      name: "about",
      title: "About",
    },
    {
      name: "work",
      title: "Work",
    },
    {
      name: "blog",
      title: "Blog",
    },
  ],
  fields: [
    {
      name: "heroAreaImage",
      title: "Hero Area Image",
      type: "image",
      group: "heroArea",
      validation: (rule) => rule.required().error("This field is required"),
    },
    {
      name: "aboutImage",
      title: "About Image",
      type: "image",
      group: "about",
      validation: (rule) => rule.required().error("This field is required"),
    },
    {
      name: "photographyWork",
      title: "Photography Work",
      type: "array",
      description:
        "For better organization, upload images via the Media tab and use 'Select' when adding them. To reorder images in this section, simply drag and drop them in the desired order.",
      of: [{ type: "image" }],
      group: "work",
      validation: (rule) => [
        rule.required().error("This field is required"),
        rule.min(1).error("This field must contain at least one image"),
      ],
    },
    {
      name: "videographyWork",
      title: "Videography Work",
      type: "array",
      description:
        "Enter the YouTube video ID (the part after v= in the URL). For example, in https://www.youtube.com/watch?v=abc123, the ID is abc123.",
      of: [{ type: "string" }],
      group: "work",
      validation: (rule) => [
        rule.required().error("This field is required"),
        rule.min(1).error("This field must contain at least one video id"),
        rule.custom((values) => {
          if (!values) return true;
          return (
            values.every(
              (value) => typeof value === "string" && !/^\s*$/.test(value)
            ) || "Video IDs cannot be empty or contain only spaces"
          );
        }),
      ],
    },
    {
      name: "blogPosts",
      title: "Blog Posts",
      type: "array",
      options: { disableActions: ["duplicate"] },
      of: [
        {
          type: "reference",
          to: { type: "blogPost" },
          options: {
            disableNew: true,
            filter: ({ document }) => {
              const excludedPostIds =
                document?.blogPosts?.map((ref) => ref._ref) || [];
              return {
                filter: "!(_id in $excludedPostIds)",
                params: { excludedPostIds },
              };
            },
          },
        },
      ],
      group: "blog",
      validation: (rule) => [
        rule.max(3).error("This field cannot contain more than 3 blog posts"),
        rule.unique().error("This field cannot contain duplicate blog posts"),
      ],
    },
  ],
};

export default homePageType;
