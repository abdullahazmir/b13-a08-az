/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
   images: {
    remotePatterns: [
     {
        protocol: 'https',
        hostname: 'bdbusinessfinder.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ]
  }
};

export default nextConfig;

// https://bdbusinessfinder.com/wp-content/uploads/2023/06/11-32.jpg
// images.unsplash.com
