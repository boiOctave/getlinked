/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


module.exports = {
    presets: ["next/babel"],
    plugins: [
      ["@locator/babel-jsx/dist", {
        env: "development",
      }]
    ]
  };