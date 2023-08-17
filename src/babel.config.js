module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        importSource: '@emotion/react',
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@emotion'],
  ].filter(Boolean),
};
