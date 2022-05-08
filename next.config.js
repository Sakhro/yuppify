/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  i18n,
  outputFileTracing: true,
  reactStrictMode: true,
  images: {
    domains: ["prexsell-staging.infura-ipfs.io"],
  },
};

module.exports = nextConfig;
