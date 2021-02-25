// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  plugins: [
    // ["@snowpack/plugin-webpack", {}]
    ["@snowpack/plugin-dotenv", {}],
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: "es2018",
    treeshake: true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
