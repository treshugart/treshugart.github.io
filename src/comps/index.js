/** @jsx h */

import { Component, define, props } from "skatejs";
import { h } from "../utils";
import { styled, themed } from "../utils/swc";

export const Align = styled(
  ({ type }) => `
  text-align: ${type};
`
);

export const Avatar = styled(
  `
  border-radius: 50%;
`,
  "img"
);

export const Body = styled(
  ({ backgroundColor, color, grid }) => `
  background-color: ${backgroundColor || "white"};
  color: ${color || "#333"};
  display: block;
  font-family: Helvetica;
  height: 100%;
  margin: -8px;
  padding: ${grid}px;
`
);

const heading = ({ grid, headingBackgroundColor }) => `
  background-color: ${headingBackgroundColor || "transparent"};
  display: block;
  margin: ${grid}px 0;
  padding: 0px;
`;

export const H1 = styled(heading, "h1");
export const H2 = styled(
  props => `
  ${heading(props)}
  font-size: 20px;
  font-weight: normal;
`,
  "h2"
);

const p = ({ grid = 10 }) => `
  margin: ${grid}px 0;
`;

export const P = styled(p, "p");

export const Note = styled(
  props => `
  ${p(props)}
  font-size: 10px;
`
);

const Theme = themed({
  backgroundColor: "#fffcf7",
  color: "#333",
  grid: 10
});

const Head = define(
  class extends Component {
    static props = { content: null };
    get renderRoot() {
      return document.head;
    }
    renderCallback({ content }) {
      return content;
    }
  }
);

export const Layout = define(
  class extends Component {
    renderCallback() {
      return (
        <Theme>
          <Head
            content={
              <meta
                attrs={{
                  name: "msvalidate.01",
                  content: "23E87E1F97820E7430B04FEE9EAA46E8"
                }}
              />
            }
          />
          <Body>
            <slot />
          </Body>
        </Theme>
      );
    }
  }
);
