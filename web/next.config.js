const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media-private.canva.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "${path.join(__dirname, "styles")}/_variables.scss";`,
  },
};

module.exports = nextConfig;
