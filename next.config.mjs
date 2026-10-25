/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [1280, 1400],
    imageSizes: [
    ],
    qualities: [80, 90, 100],
  
  },
};

export default withNextIntl(nextConfig);
