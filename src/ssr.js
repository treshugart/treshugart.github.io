require('@skatejs/ssr/register');
require('babel-register')({
  plugins: ['transform-es2015-modules-commonjs'],
  presets: ['react', 'stage-0']
});

const render = require('@skatejs/ssr');
const App = require('.').default;

render(new App()).then(console.log);
