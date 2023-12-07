
/** @type {import('next').NextConfig} */
const isDevelopment = process.env.NODE_ENV !== 'production';

const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: isDevelopment 
              ? "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';" 
              : "default-src 'self'; img-src 'self' https://scribbles-dac22275e7f8.herokuapp.com; script-src 'self'; style-src 'self';",
          },
        ],
      },
    ]
  },
};
module.exports = nextConfig
