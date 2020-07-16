module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
    config.module.rules.push({
      test: /\.(ttf)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 1,
          publicPath: ".next/server/",
        },
      },
    });
    return config;
  },
};
