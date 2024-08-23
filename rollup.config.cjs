// rollup.config.js
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const dts = require("rollup-plugin-dts").default;
const packageJson = require("./package.json");

module.exports = [
  {
    input: "src/index.tsx", // Your entry file
    output: [
      {
        file: packageJson.main, // CommonJS output
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module, // ES module output
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];