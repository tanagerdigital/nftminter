/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const isProd = process.env.NODE_ENV === 'live'
module.exports = {
  reactStrictMode: true,
  basePath: '/nftminter',
  assetPrefix: isProd
    ? 'https://tanagerdigital.github.io/nftminter/'
    : undefined,
  images: {
    loader: 'akamai',
    path: '',
  },
  env: {
    walletConnectProjectId: process.env.walletConnectProjectId,
    infuraId: process.env.infuraId,
  },
}
