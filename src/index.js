/** @jsx h */

import { Component, define, props } from 'skatejs/es-latest';
import { h } from './utils';
import { themed } from './utils/swc';
import { Body } from './comps';

const Page = require('./pages').default;
const Theme = themed({
  backgroundColor: '#fffcf7',
  color: '#333',
  grid: 10
});

const Head = define(class extends Component {
  static props = { content: props.array }
  get renderRoot () {
    return document.head;
  }
  renderCallback ({ content }) {
    return content;
  }
});

export default define(class extends Component {
  renderCallback () {
    return (
      <html>
        <head>
          <meta attrs={{
            name: 'google-site-verification',
            content: 'RQC7x29gWdBQabk-N2fbERaNjGckTk7zhDWLcpLw1e0'
          }} />
        </head>
        <body>
          <Theme>
            <Body>
              <Page />
            </Body>
          </Theme>
        </body>
      </html>
    );
  }
});
