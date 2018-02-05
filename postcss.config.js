const cssnanoConfig = {
  preset: ['default', { discardComments: { removeAll: true } }]
};


module.exports = ({ file, options }) => {
  return {
    parser: 'postcss-safe-parser',
    plugins: {
      'postcss-easy-import': true,
      'postcss-css-variables': true,
      'cssnano': cssnanoConfig,
      'autoprefixer': true
    },
  };
};
