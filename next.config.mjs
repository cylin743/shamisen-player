/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/shamisen-player",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};
  

export default nextConfig;
