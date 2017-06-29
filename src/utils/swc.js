/** @jsx h */

import { Component, define, h, props } from 'skatejs/es-latest';

const _context = Symbol();
let currentContext = null;

function getContext (elem) {
  elem.dispatchEvent(new Event('__context', {
    bubbles: true,
    cancelable: true,
    composed: true,
    scoped: true
  }));
  const returnContext = currentContext;
  currentContext = null;
  return returnContext;
}

function setContext (elem, context) {
  if (!elem.hasOwnProperty(_context)) {
    elem.addEventListener('__context', function (e) {
      e.stopPropagation();
      currentContext = this[_context];
    });
  }
  elem[_context] = context;
}

function parseName (name) {
  const names = name.split('-');
  const prefix = names.length === 1 ? '' : names[0];
  const suffix = names[1] || name;
  return prefix ? { prefix, suffix } : { suffix };
}

export function styled (name, css, tag) {
  const { prefix = 'styled', suffix } = parseName(name);
  const InnerT = tag || suffix;
  return define(class extends Component {
    static is = `${prefix}-${suffix}`
    static props = {
      props: props.object
    }
    renderCallback ({ props }) {
      let style = typeof css === 'function' ? css({...getContext(this), ...props}) : css;
      style = style.indexOf(':host') > -1 ? style : `${InnerT}{${style}}`;
      return <InnerT><style>{style}</style><slot /></InnerT>;
    }
  });
}

export function themed (name, theme) {
  const { prefix = 'themed', suffix } = parseName(name);
  return define(class extends HTMLElement {
    static is = `${prefix}-${suffix}`
    connectedCallback () {
      setContext(this, theme);
    }
  });
}
