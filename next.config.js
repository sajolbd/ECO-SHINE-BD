/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos', port: '' },
      { protocol: 'https', hostname: 'drive.google.com', port: '' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com', port: '' },
      { protocol: 'https', hostname: 'res.cloudinary.com', port: '' },
      { protocol: 'https', hostname: 'bayshore.nyc3.digitaloceanspaces.com' },
      { protocol: 'https', hostname: 'dashboard-sabbir-nasir.vercel.app', port: '' },
      { protocol: 'https', hostname: 'backend-sabbir-nasir.vercel.app', port: '' },
      { protocol: 'https', hostname: 'ua-engineering-pte-ltd-backend-production.up.railway.app', port: '' },
    ],
  },
  skipTrailingSlashRedirect: true,
  async headers() {
    return [
      {
        source: '/Sabbir-Nasir-Transformation-Framework.pdf',
        headers: [
          { key: 'Content-Type', value: 'application/pdf' },
          { key: 'Content-Disposition', value: 'attachment; filename="Sabbir-Nasir-Transformation-Framework.pdf"' },
        ],
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
