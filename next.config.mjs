/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/pdfs",
            publicPath: "/_next/static/pdfs",
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
