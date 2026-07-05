import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: path.join(import.meta.dirname, "../../"),
  transpilePackages: ["@coequipattes/ui"],
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
