const galleryPageType = {
  name: "galleryPage",
  title: "Gallery Page",
  type: "document",
  __experimental_hidden: true,
  groups: [
    {
      name: "photography",
      title: "Photography",
      default: true,
    },
    {
      name: "videography",
      title: "Videography",
    },
  ],
  fields: [
    {
      name: "foodPhotography",
      title: "Food Photography",
      type: "array",
      group: "photography",
      of: [{ type: "image" }],
      validation: (rule) => [
        rule.required().error("This field is required"),
        rule.min(1).error("This field must contain at least one image"),
      ],
    },
    {
      name: "eventPhotography",
      title: "Event Photography",
      type: "array",
      group: "photography",
      of: [{ type: "image" }],
      validation: (rule) => [
        rule.required().error("This field is required"),
        rule.min(1).error("This field must contain at least one image"),
      ],
    },
    {
      name: "creativePhotography",
      title: "Creative Photography",
      type: "array",
      group: "photography",
      of: [{ type: "image" }],
      validation: (rule) => [
        rule.required().error("This field is required"),
        rule.min(1).error("This field must contain at least one image"),
      ],
    },
    {
      name: "foodVideography",
      title: "Food Videography",
      type: "array",
      description:
        "Enter the YouTube video ID (the part after v= in the URL). For example, in https://www.youtube.com/watch?v=abc123, the ID is abc123.",
      of: [{ type: "string" }],
      group: "videography",
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
      name: "eventVideography",
      title: "Event Videography",
      type: "array",
      description:
        "Enter the YouTube video ID (the part after v= in the URL). For example, in https://www.youtube.com/watch?v=abc123, the ID is abc123.",
      of: [{ type: "string" }],
      group: "videography",
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
      name: "creativeVideography",
      title: "Creative Videography",
      type: "array",
      description:
        "Enter the YouTube video ID (the part after v= in the URL). For example, in https://www.youtube.com/watch?v=abc123, the ID is abc123.",
      of: [{ type: "string" }],
      group: "videography",
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
  ],
};

export default galleryPageType;
