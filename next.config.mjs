// next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/original/**", // Allows images from this path
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com", // Allows GitHub avatars
      },
    ],
    // The domains key is optional when using remotePatterns
    domains: ['image.tmdb.org'], 
  },
};

export default nextConfig;
