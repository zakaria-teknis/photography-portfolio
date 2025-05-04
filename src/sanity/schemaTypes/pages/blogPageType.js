export default {
  name: "blogPage",
  title: "Blog Page",
  type: "document",
  __experimental_hidden: true,
  groups: [
    {
      name: "heroArea",
      title: "Hero Area",
      default: true,
    },
    {
      name: "authorsChoice",
      title: "Author's Choice",
    },
    {
      name: "latestArticles",
      title: "Latest Articles",
    },
  ],
  fields: [
    {
      name: "mainBlogPost",
      title: "Main Blog Post",
      type: "reference",
      to: { type: "blogPost" },
      options: {
        disableNew: true,
        filter: ({ document }) => {
          const excludedPostIds = [
            document?.mainBlogPost?._ref,
            document?.authorsChoiceBlogPost?._ref,
            ...(document?.latestBlogPosts ?? []).map((ref) => ref._ref),
            ...(document?.heroAreaBlogPosts ?? []).map((ref) => ref._ref),
          ].filter(Boolean);

          return {
            filter: "!(_id in $excludedPostIds)",
            params: { excludedPostIds },
          };
        },
      },
      group: "heroArea",
      validation: (rule) => [rule.required().error("This field is required")],
    },

    {
      name: "heroAreaBlogPosts",
      title: "Hero Area Blog Posts",
      type: "array",
      options: { disableActions: ["duplicate"] },
      of: [
        {
          type: "reference",
          to: { type: "blogPost" },
          options: {
            disableNew: true,
            filter: ({ document }) => {
              const excludedPostIds = [
                document?.mainBlogPost?._ref,
                document?.authorsChoiceBlogPost?._ref,
                ...(document?.latestBlogPosts ?? []).map((ref) => ref._ref),
                ...(document?.heroAreaBlogPosts ?? []).map((ref) => ref._ref),
              ].filter(Boolean);

              return {
                filter: "!(_id in $excludedPostIds)",
                params: { excludedPostIds },
              };
            },
          },
        },
      ],
      group: "heroArea",
      validation: (rule) => [
        rule.required().error("This field is required"),
        rule.min(1).error("This field must contain at least one blog post"),
        rule.max(3).error("This field cannot contain more than 3 blog posts"),
        rule.unique().error("This field cannot contain duplicate blog posts"),
      ],
    },

    {
      name: "authorsChoiceBlogPost",
      title: "Author's Chocie Blog Post",
      type: "reference",
      options: {
        disableNew: true,
        filter: ({ document }) => {
          const excludedPostIds = [
            document?.mainBlogPost?._ref,
            document?.authorsChoiceBlogPost?._ref,
            ...(document?.latestBlogPosts ?? []).map((ref) => ref._ref),
            ...(document?.heroAreaBlogPosts ?? []).map((ref) => ref._ref),
          ].filter(Boolean);

          return {
            filter: "!(_id in $excludedPostIds)",
            params: { excludedPostIds },
          };
        },
      },
      to: { type: "blogPost" },
      group: "authorsChoice",
    },

    {
      name: "latestBlogPosts",
      title: "Latest Blog Posts",
      type: "array",
      options: { disableActions: ["duplicate"] },
      of: [
        {
          type: "reference",
          to: { type: "blogPost" },
          options: {
            disableNew: true,
            filter: ({ document }) => {
              const excludedPostIds = [
                document?.mainBlogPost?._ref,
                document?.authorsChoiceBlogPost?._ref,
                ...(document?.latestBlogPosts ?? []).map((ref) => ref._ref),
                ...(document?.heroAreaBlogPosts ?? []).map((ref) => ref._ref),
              ].filter(Boolean);

              return {
                filter: "!(_id in $excludedPostIds)",
                params: { excludedPostIds },
              };
            },
          },
        },
      ],
      group: "latestArticles",
      validation: (rule) => [
        rule.max(3).error("This field cannot contain more than 3 blog posts"),
        rule.unique().error("This field cannot contain duplicate blog posts"),
      ],
    },
  ],
};
