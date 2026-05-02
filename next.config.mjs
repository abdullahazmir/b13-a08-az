/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
   images: {
    remotePatterns: [
      {
        hostname: 'bdbusinessfinder.com'
      }
    ]
  }
};

export default nextConfig;

// https://bdbusinessfinder.com/wp-content/uploads/2023/06/11-32.jpg
