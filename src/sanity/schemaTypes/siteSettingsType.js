const siteSettingsType = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  __experimental_hidden: true,
  fields: [
    {
      name: "brandName",
      title: "Brand Name",
      type: "string",
      validation: (rule) => [
        rule.required().error("This field is required"),
        rule
          .regex(/^(?!\s*$)/)
          .error("This field cannot be empty or contain only spaces"),
      ],
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      validation: (rule) => rule.required().error("This field is required"),
    },
    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      description:
        "Visitors will use this phone number to contact you on WhatsApp via the button.",
      validation: (rule) => [
        rule.required().error("This field is required"),
        rule
          .regex(/^[67]\d{8}$/)
          .error("Must be 9 digits starting with 6 or 7 (e.g., 612345678)"),
      ],
    },
    {
      name: "behanceLink",
      title: "Behance Link",
      type: "string",
      validation: (rule) => [
        rule.required().error("This field is required"),
        rule
          .regex(/^(?!\s*$)/)
          .error("This field cannot be empty or contain only spaces"),
      ],
    },
    {
      name: "instagramLink",
      title: "Instagram Link",
      type: "string",
      validation: (rule) => [
        rule.required().error("This field is required"),
        rule
          .regex(/^(?!\s*$)/)
          .error("This field cannot be empty or contain only spaces"),
      ],
    },
    {
      name: "linkedinLink",
      title: "LinkedIn Link",
      type: "string",
      validation: (rule) => [
        rule.required().error("This field is required"),
        rule
          .regex(/^(?!\s*$)/)
          .error("This field cannot be empty or contain only spaces"),
      ],
    },
  ],
};

export default siteSettingsType;
