import { create } from "zustand";
import { client } from "@/sanity/lib/client";

export const useGalleryPageStore = create((set) => ({
  loadingStates: {},
  setLoading: (key, isLoading) =>
    set((state) => ({
      loadingStates: {
        ...state.loadingStates,
        [key]: isLoading,
      },
    })),

  foodPhotographyImages: [],
  eventPhotographyImages: [],
  creativePhotographyImages: [],

  foodVideographyVideos: [],
  eventVideographyVideos: [],
  creativeVideographyVideos: [],

  foodPhotographyButtonShow: true,
  eventPhotographyButtonShow: true,
  creativePhotographyButtonShow: true,

  foodVideographyButtonShow: true,
  eventVideographyButtonShow: true,
  creativeVideographyButtonShow: true,

  getContentCount: async (type, media) => {
    const { setLoading } = useGalleryPageStore.getState();

    try {
      setLoading(`${type}${media}`, true);

      const contentCount = await client.fetch(
        `*[_type == "galleryPage" && _id == "galleryPage"][0]{"count": count(${type}${media})}`
      );

      const { count } = await contentCount;

      if (media === "Photography")
        set({
          [`${type}${media}ButtonShow`]: count > 6,
        });

      if (media === "Videography")
        set({
          [`${type}${media}ButtonShow`]: count > 3,
        });
    } finally {
      setLoading(`${type}${media}`, false);
    }
  },

  getContent: async (type, media, index) => {
    const { setLoading } = useGalleryPageStore.getState();

    try {
      setLoading(`${type}${media}`, true);

      const content = await client.fetch(
        `*[_type == "galleryPage" && _id == "galleryPage"][0]{${type}${media}[${index}...${index + (media === "Photography" ? 6 : 2)}]}`
      );
      const contentCount = await client.fetch(
        `*[_type == "galleryPage" && _id == "galleryPage"][0]{"count": count(${type}${media})}`
      );

      const { count } = await contentCount;

      if (media === "Photography") {
        set((state) => {
          const fetchedContent = [
            ...(state[`${type}${media}Images`] || []),
            ...content[`${type}${media}`],
          ];

          return {
            [`${type}${media}Images`]: fetchedContent,
            [`${type}${media}ButtonShow`]: fetchedContent.length < count - 6,
          };
        });
      }

      if (media === "Videography") {
        set((state) => {
          const fetchedContent = [
            ...(state[`${type}${media}Videos`] || []),
            ...content[`${type}${media}`],
          ];

          return {
            [`${type}${media}Videos`]: fetchedContent,
            [`${type}${media}ButtonShow`]: fetchedContent.length < count - 3,
          };
        });
      }
    } finally {
      setLoading(`${type}${media}`, false);
    }
  },
}));
