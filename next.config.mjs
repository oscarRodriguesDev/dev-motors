/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.cosmicjs.com',
          
          },
          {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com',
          
          },
        ],
      },
};

export default nextConfig;
