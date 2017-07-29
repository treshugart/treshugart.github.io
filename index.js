require("@skatejs/ssr/register");
require("babel-register")({
  plugins: ["transform-es2015-modules-commonjs"],
  presets: ["react", "stage-0"]
});

const fs = require("fs");
const render = require("@skatejs/ssr");
const App = require("./src").default;
const head = `
  <head>
    <meta name="google-site-verification" content="RQC7x29gWdBQabk-N2fbERaNjGckTk7zhDWLcpLw1e0">
    <script src="https://unpkg.com/@webcomponents/webcomponentsjs"></script>
  </head>
`;

render(new App()).then(r =>
  fs.writeFile("index.html", `${head}${r}`, () => {})
);
