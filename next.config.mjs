/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    ppr: "incremental",
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();
        if (entries["main.js"] && !entries["main.js"].includes("./src/updateMockData.js")) {
          entries["main.js"].unshift("./src/updateMockData.js");
        }
        return entries;
      };
    }
    return config;
  },
};

export default nextConfig;
