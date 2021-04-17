module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:slug*",
        destination: `${process.env.NEXT_PUBLIC_SERVER}/api/:slug*`,
      },
    ];
  },
};
