export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings" && _id == "siteSettings"][0]`;

export const HOME_PAGE_QUERY = `*[_type == "homePage" && _id == "homePage"][0]{heroAreaImage, aboutImage, photographyWork, videographyWork}`;

export const HOME_PAGE_BLOG_POSTS_QUERY = `
  *[_type == "blogPost" && _id in *[_type == "homePage" && _id == "homePage"][0].blogPosts[]._ref]{title, slug, description, image, publishedAt}
`;

export const GALLERY_PAGE_PHOTOGRAPHY_QUERY = `*[_type == "galleryPage" && _id == "galleryPage"][0]{foodPhotography[0...6], eventPhotography[0...6], creativePhotography[0...6]}`;

export const GALLERY_PAGE_VIDEOGRAPHY_QUERY = `*[_type == "galleryPage" && _id == "galleryPage"][0]{foodVideography[0...3], eventVideography[0...3], creativeVideography[0...3]}`;

export const BLOG_PAGE_QUERY = `*[_type == "blogPage" && _id == "blogPage"][0]{
  mainBlogPost->{
    title,
    slug,
    description,
    image,
    publishedAt
  },
  authorsChoiceBlogPost->{
    title,
    slug,
    description,
    image,
    publishedAt
  },
  heroAreaBlogPosts[]->{
    title,
    slug,
    description,
    image,
    publishedAt
  },
  latestBlogPosts[]->{
    title,
    slug,
    description,
    image,
    publishedAt
  }
}`;
