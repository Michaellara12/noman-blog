/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async() => {
    return [
      {
        source: '/proyectos',
        destination: '/',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
