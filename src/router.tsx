import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  // GitHub Pages project site:
  // https://clairelee1010.github.io/chain-schoolhouse-play/
  //
  // Lovable / local:
  // /
  const isGitHubPages =
    typeof window !== "undefined" &&
    window.location.hostname.endsWith("github.io");

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,

    // Keep Lovable/local at "/".
    // Only GitHub Pages uses the repository subpath.
    basepath: isGitHubPages ? "/chain-schoolhouse-play" : "/",
  });

  return router;
};
