/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['app.custela.com'],
  },
  webpack: (config) => {
    config.module.rules.push({ test: /\.glsl$/, type: 'asset/source' })
    return config
  },
  transpilePackages: ['three'],
  async redirects() {
    return [
      // Czech now lives under /cs; the bare root and the old un-prefixed legal
      // URLs permanently redirect to their /cs equivalents.
      { source: '/', destination: '/cs', permanent: true },
      { source: '/obchodni-podminky', destination: '/cs/obchodni-podminky', permanent: true },
      { source: '/ochrana-soukromi', destination: '/cs/ochrana-soukromi', permanent: true },
      { source: '/ai-transparency', destination: '/cs/ai-transparency', permanent: true },
    ]
  },
}

module.exports = nextConfig
