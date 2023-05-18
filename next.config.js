/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  experimental: {
    appDir: true,
  },
  // distDir: 'build',
  // assetPrefix: isProd ? 'https://cdn2.posts.chat' : undefined,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  // output: "standalone",
};

module.exports = nextConfig;
