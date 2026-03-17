import { withNextVideo } from "next-video/process";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
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

