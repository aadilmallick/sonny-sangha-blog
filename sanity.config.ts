/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import StudioNavbar from "@/components/StudioNavbar";
import StudioLogo from "@/components/StudioLogo";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    unsplashImageAsset(),
  ],
  studio: {
    components: {
      // This is where you add custom components to the studio. Give a link to find out more
      navbar: StudioNavbar,
      logo: StudioLogo,
    },
  },
});
