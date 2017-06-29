/** @jsx h */

import { Component, define } from 'skatejs/es-latest';
import { h } from '../utils';
import { styled } from '../utils/swc';
import { H1, P } from '../comps';

const Main = styled('main', ({ grid }) => `
  background-color: #ffefd5;
  border: 2px solid #ffd591;
  border-radius: 3px;
  color: #4d3000;
  display: block;
  margin: ${grid * 10}px auto;
  padding: ${grid * 2}px;
  width: ${grid * 40}px;
`);

export default define(class extends Component {
  renderCallback () {
    return (
      <div>
        <style>{`
          a { color: #915a00; }
        `}</style>
        <Main>
          <H1>Trey Shugart</H1>
          <P>I'm currently working on redoing this to be both a blog as well as my resume. In the mean time, checkout my <a href="https://github.com/treshugart">GitHub profile</a>.</P>
          <P>There's some pretty bleeding edge stuff going on here:</P>
          <ul>
            <li>Server-side rendered, and statically generated web components.</li>
            <li>Web components created with <a attrs={{ href: 'https://github.com/skatejs/skatejs' }}>skatejs</a> and rendered with <a attrs={{ href: 'https://github.com/developit/preact' }}>preact</a>.</li>
            <li>A form of Styled Components, but using Shadow DOM to do the heavy lifting.</li>
          </ul>
          <P>You can check out the source at <a attrs={{ href: 'https://github.com/treshugart/treshugart.github.io' }}>treshugart/treshugart.github.io</a>.</P>
        </Main>
      </div>
    );
  }
});
