/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: {
    library: "cstempair",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: `(typeof self !== 'undefined' ? self : this)`,
    // Set the output value to "standalone"
    output: "standalone",
  },
};

module.exports = nextConfig;
