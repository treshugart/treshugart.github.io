/** @jsx h */

import { Component, define } from 'skatejs/es-latest';
import { h } from './utils';
import { themed } from './utils/swc';
import { Body } from './comps';

const Page = require('./pages').default;
const Theme = themed('default', {
  backgroundColor: '#fffcf7',
  color: '#333',
  grid: 10
});

export default define(class extends Component {
  renderCallback () {
    return (
      <Theme>
        <Body>
          <Page />
        </Body>
      </Theme>
    );
  }
});
