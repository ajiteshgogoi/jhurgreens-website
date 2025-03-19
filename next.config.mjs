/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/webp']
  },
}

let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
  if (userConfig.default) {
    Object.keys(userConfig.default).forEach(key => {
      if (typeof nextConfig[key] === 'object' && !Array.isArray(nextConfig[key])) {
        nextConfig[key] = {
          ...nextConfig[key],
          ...userConfig.default[key],
        }
      } else {
        nextConfig[key] = userConfig.default[key]
      }
    })
  }
} catch (e) {
  // ignore error if user config doesn't exist
}

export default nextConfig
