/** @jsx h */

import { Component, define, h, props, withUnique } from "skatejs";

const _context = Symbol();
let currentContext = null;

function getContext(elem) {
  elem.dispatchEvent(
    new Event("__context", {
      bubbles: true,
      cancelable: true,
      composed: true,
      scoped: true
    })
  );
  const returnContext = currentContext;
  currentContext = null;
  return returnContext;
}

function setContext(elem, context) {
  if (!elem.hasOwnProperty(_context)) {
    elem.addEventListener("__context", function(e) {
      e.stopPropagation();
      currentContext = this[_context];
    });
  }
  elem[_context] = context;
}

export function styled(css, tag) {
  const Tag = css.name || tag || "div";
  return define(
    class extends Component {
      static props = {
        args: props.object
      };
      renderCallback({ args }) {
        let style =
          typeof css === "function"
            ? css({ ...getContext(this), ...args })
            : css;
        style = style.indexOf(":host") > -1 ? style : `${Tag}{${style}}`;
        return (
          <Tag {...args}>
            <style>
              {style}
            </style>
            <slot />
          </Tag>
        );
      }
    }
  );
}

export function themed(theme) {
  return define(
    class extends withUnique() {
      connectedCallback() {
        setContext(this, theme);
      }
    }
  );
}
