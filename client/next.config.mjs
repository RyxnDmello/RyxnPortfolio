/** @type {import('next').NextConfig} */

const SERVER_API = process.env.NEXT_PUBLIC_SERVER_API;

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${SERVER_API}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
