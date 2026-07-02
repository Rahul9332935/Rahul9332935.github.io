import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rahul Kumar Portfolio",
    short_name: "Rahul",
    description: "Portfolio of Rahul Kumar, Java Backend Engineer.",
    start_url: "/",
    display: "standalone",
    background_color: "#050816",
    theme_color: "#38bdf8",
    icons: [
      {
        src: "/assets/profile.png",
        sizes: "600x600",
        type: "image/png"
      }
    ]
  };
}
