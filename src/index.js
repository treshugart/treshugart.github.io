/** @jsx h */

import { Component, define, props } from "skatejs";
import { h } from "./utils";
import { themed } from "./utils/swc";
import { Body } from "./comps";

const Page = require("./pages").default;
const Theme = themed({
  backgroundColor: "#fffcf7",
  color: "#333",
  grid: 10
});

const Head = define(
  class extends Component {
    static props = { content: props.array };
    get renderRoot() {
      return document.head;
    }
    renderCallback({ content }) {
      return content;
    }
  }
);

export default define(
  class extends Component {
    renderCallback() {
      return (
        <Theme>
          <Body>
            <Page />
          </Body>
        </Theme>
      );
    }
  }
);
