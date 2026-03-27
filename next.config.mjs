import { withNextVideo } from "next-video/process";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default withNextVideo(nextConfig, {
  folder: 'videos',
  provider: 'mux',
  providerConfig: {
    mux: {
      requestOptions: {
        headersTimeout: 60000,
        bodyTimeout: 300000,
      }
    }
  }
});