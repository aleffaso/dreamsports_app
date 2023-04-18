/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  images: {
    domains: ['cdn.mos.cms.futurecdn.net', 'cdn.shopify.com', 'i0.wp.com']
  }
};

const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  /* config options here */
});

module.exports = nextConfig;
