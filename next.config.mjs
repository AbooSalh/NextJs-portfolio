/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./loader.js",
    domains: ["placehold.co", "images.pexels.com"],
  },
};

export default nextConfig;
