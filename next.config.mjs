/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/**', // Разрешает загрузку изображений с любого пути
      },
    ],
  },
};

export default nextConfig;
