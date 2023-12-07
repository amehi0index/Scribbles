const isDevelopment = process.env.NODE_ENV !== 'production';

const nextConfig = {

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `default-src 'self'; img-src 'self' https://scribbles-dac22275e7f8.herokuapp.com; script-src 'self' ${isDevelopment ? "'unsafe-eval'" : ""} https://scribbles-dac22275e7f8.herokuapp.com; style-src 'self' 'unsafe-inline';`,
          },
        ],
      },
    ]
  },
};