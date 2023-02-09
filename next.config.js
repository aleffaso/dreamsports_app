/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
};

const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  /* config options here */
});

module.exports = nextConfig;
