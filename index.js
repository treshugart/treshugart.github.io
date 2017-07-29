require("@skatejs/ssr/register");
require("babel-register")({
  plugins: ["transform-es2015-modules-commonjs"],
  presets: ["react", "stage-0"]
});

const fs = require("fs");
const render = require("@skatejs/ssr");
const App = require("./src").default;

render(new App()).then(r => fs.writeFile("index.html", r, () => {}));
