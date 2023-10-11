/** @type {import('next').NextConfig} */

const nextConfig = {
  build: {
    optimization: {
      minimize: true,
      minimizerOptions: {
        terser: {
          format: {
            comments: false,
          },
        },
      },
    },
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ["api.minzifatravel.ru"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "api.minzifatravel.ru",
        port: "",
        pathname: "/media",
      },
    ],
  },
};

module.exports = nextConfig;
