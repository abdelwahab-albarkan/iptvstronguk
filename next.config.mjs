/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  async redirects() {
    const www = [{ type: 'host', value: 'www.iptvstronguk.com' }];
    return [
      { source: '/', has: www, destination: 'https://iptvstronguk.com/', permanent: true },
      { source: '/:file(.*\\.[a-zA-Z0-9]+)', has: www, destination: 'https://iptvstronguk.com/:file', permanent: true },
      { source: '/:path+', has: www, destination: 'https://iptvstronguk.com/:path+/', permanent: true }
    ];
  }
};

export default nextConfig;
