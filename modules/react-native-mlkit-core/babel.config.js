// babel.config.js
module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [["@babel/plugin-transform-private-methods", { loose: true }]],
};
