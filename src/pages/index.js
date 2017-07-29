/** @jsx h */

import { Component, define } from "skatejs";
import { h } from "../utils";
import { styled } from "../utils/swc";
import { Align, Avatar, H1, Note, P } from "../comps";

const Main = styled(
  ({ grid }) => `
  background-color: #ffefd5;
  border: 2px solid #ffd591;
  border-radius: 3px;
  color: #4d3000;
  display: block;
  margin: ${grid * 10}px auto;
  padding: ${grid * 2}px;
  width: ${grid * 40}px;
`
);

export default define(
  class extends Component {
    renderCallback() {
      return (
        <div>
          <style>{`
          a { color: #915a00; }
        `}</style>
          <Main>
            <Align args={{ type: "center" }}>
              <Avatar
                args={{
                  src:
                    "http://2.gravatar.com/avatar/a6e16fabd3b79794814c6f8f562d61ce?size=200"
                }}
              />
            </Align>
            <P>
              Heyo, I'm Trey and I'm currently working on redoing this to be
              both a blog as well as my resume.
            </P>
            <P>There's some pretty bleeding edge stuff going on here:</P>
            <ul>
              <li>
                Server-side rendered, and statically generated web components.
              </li>
              <li>
                Web components created with{" "}
                <a attrs={{ href: "https://github.com/skatejs/skatejs" }}>
                  skatejs
                </a>{" "}
                and rendered with{" "}
                <a attrs={{ href: "https://github.com/developit/preact" }}>
                  preact
                </a>.
              </li>
              <li>
                A form of Styled Components, but using Shadow DOM to do the
                heavy lifting.
              </li>
            </ul>
            <P>
              You can check out the source at{" "}
              <a
                attrs={{
                  href: "https://github.com/treshugart/treshugart.github.io"
                }}
              >
                treshugart/treshugart.github.io
              </a>.
            </P>
            <Note>
              <div>
                <Align args={{ type: "center" }}>
                  <a attrs={{ href: "https://twitter.com/treshugart" }}>
                    @treshugart
                  </a>
                  {` | `}
                  <a attrs={{ href: "https://github.com/treshugart " }}>
                    github
                  </a>
                </Align>
              </div>
            </Note>
          </Main>
        </div>
      );
    }
  }
);
