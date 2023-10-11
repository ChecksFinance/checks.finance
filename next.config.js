/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja', 'zh'],
    localeDetection: false,
  },
}

module.exports = nextConfig
