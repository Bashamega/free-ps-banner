module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false, // Prevent Babel from converting ES modules to CommonJS
      },
    ],
    '@babel/preset-react',
  ],
};
