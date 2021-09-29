module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images-americanas.b2w.io"],
    deviceSizes: [480, 640, 1080, 1200, 1920, 2048],
    imageSizes: [50, 80, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};
