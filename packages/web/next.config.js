const { join } = require("path");
const workspace = join(__dirname, "..");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      include: [workspace],
      exclude: /node_modules/,
      use: options.defaultLoaders.babel,
    });

    return config;
  },

}

module.exports = nextConfig
