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
}

module.exports = nextConfig
