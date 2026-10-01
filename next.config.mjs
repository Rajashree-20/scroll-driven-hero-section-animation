const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repo = "scroll-driven-hero-section-animation";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isGithubActions ? `/${repo}` : "",
  assetPrefix: isGithubActions ? `/${repo}/` : ""
};

export default nextConfig;