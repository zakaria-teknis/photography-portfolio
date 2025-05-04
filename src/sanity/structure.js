import {
  FaCamera,
  FaHouse,
  FaNewspaper,
  FaGear,
  FaGlobe,
} from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      // 1. Site Settings (Singleton)
      S.listItem()
        .title("Site Settings")
        .icon(() => <FaGear />)
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Site Settings")
        ),

      // 2. Pages Section
      S.listItem()
        .title("Pages")
        .icon(() => <FaGlobe />)
        .child(
          S.list()
            .title("Pages")
            .items([
              // 1. Home Page (Singleton)
              S.listItem()
                .title("Home Page")
                .icon(() => <FaHouse />)
                .child(
                  S.document()
                    .schemaType("homePage")
                    .documentId("homePage")
                    .title("Home Page")
                ),
              // 2. Gallery Page (Singleton)
              S.listItem()
                .title("Gallery Page")
                .icon(() => <FaCamera />)
                .child(
                  S.document()
                    .schemaType("galleryPage")
                    .documentId("galleryPage")
                    .title("Gallery Page")
                ),
              // 2. Gallery Page (Singleton)
              S.listItem()
                .title("Blog Page")
                .icon(() => <FaNewspaper />)
                .child(
                  S.document()
                    .schemaType("blogPage")
                    .documentId("blogPage")
                    .title("Blog Page")
                ),
            ])
        ),

      // 3. Blog Posts (Dynamic List)
      S.listItem()
        .title("Blog Posts")
        .icon(() => <FaEdit />)
        .child(
          S.documentList()
            .title("Blog Posts")
            .filter('_type == "blogPost"')
            .schemaType("blogPost")
            .canHandleIntent((intentName, params) => {
              return intentName === "edit" && params.template === "blogPost";
            })
        ),

      // 4. Other Documents (Automatically List Remaining Types)
      /*...S.documentTypeListItems().filter(
        (listItem) =>
          !["siteSettings", "homePage", "blogPost"].includes(listItem.getId())
      ),*/
    ]);
