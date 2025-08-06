const nextConfig = {
  output: "export", // این خط برای تولید خروجی استاتیک
  images: {
    unoptimized: true, // برای اینکه Image Optimization در استاتیک کار نمی‌کند
    domains: ["images.unsplash.com", "via.placeholder.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/files",
          outputPath: "static/files",
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
