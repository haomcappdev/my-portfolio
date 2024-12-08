/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/my-portfolio",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
