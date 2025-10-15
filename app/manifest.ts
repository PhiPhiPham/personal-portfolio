import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Phi Phi Pham",
    short_name: "Phi Phi Pham",
    description: "Portfolio of Phi Phi Pham",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111827",
    icons: [],
  };
}


