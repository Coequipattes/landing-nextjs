import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactCompiler: true,
  allowedDevOrigins: ["192.168.1.32", "192.168.1.48"],
  async redirects() {
    return [
      {
        source: "/garde-chien-vannes",
        destination: "/visites-chien-vannes",
        permanent: true,
      },
      {
        source: "/garde-chat-vannes",
        destination: "/visites-chat-vannes",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
