/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //aceitar imagens vindo de qualquer lugar
  images: {
    domains: ["www.google.com", "logodownload.org"],
  },
};

module.exports = nextConfig;
