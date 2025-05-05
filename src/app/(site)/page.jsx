import HeroAreaSection from "./components/homePage/HeroAreaSection";
import AboutSection from "./components/homePage/AboutSection";
import ServicesSection from "./components/homePage/ServicesSection";
import CTASection from "./components/CTASection";
import WorkSection from "./components/homePage/WorkSection";
import BlogSection from "./components/homePage/BlogSection";
import ContactSection from "./components/ContactSection";
import { client } from "@/sanity/lib/client";
import { SITE_SETTINGS_QUERY } from "@/sanity/utilities/queries";
import { HOME_PAGE_QUERY } from "@/sanity/utilities/queries";
import { HOME_PAGE_BLOG_POSTS_QUERY } from "@/sanity/utilities/queries";

// set NODE_ENV=production

export default async function HomePage() {
  let siteSettings = null;
  let homePage = null;
  let blogPosts = null;

  try {
    siteSettings = await client.fetch(SITE_SETTINGS_QUERY);

    homePage = await client.fetch(HOME_PAGE_QUERY);

    blogPosts = await client.fetch(HOME_PAGE_BLOG_POSTS_QUERY);
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    throw error;
  }

  return (
    <>
      <HeroAreaSection
        heroAreaImage={homePage?.heroAreaImage}
        siteSettings={siteSettings}
      />
      <AboutSection
        aboutImage={homePage?.aboutImage}
        siteSettings={siteSettings}
      />
      <ServicesSection />
      <CTASection
        title="Let's Talk Business"
        description="Need a service from above? Send me a message, and I'll reply within a day."
        buttonText="Send Message"
      />
      <WorkSection
        photographyWork={homePage?.photographyWork}
        videographyWork={homePage?.videographyWork}
      />
      <CTASection
        title="Ready to Start Your Project?"
        description="Let's start working on capturing your ideas through the lens."
        buttonText="Let's Start"
      />
      {blogPosts?.length > 0 && <BlogSection blogPosts={blogPosts} />}
      <ContactSection />
    </>
  );
}
