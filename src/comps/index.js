import { styled } from '../utils/swc';

export const Body = styled('body', ({ backgroundColor, color, grid }) => `
  background-color: ${backgroundColor || 'white'};
  color: ${color || '#333'};
  display: block;
  font-family: Helvetica;
  height: 100%;
  margin: -8px;
  padding: ${grid}px;
`, 'div');

const heading = ({ grid, headingBackgroundColor }) => `
  background-color: ${headingBackgroundColor || 'transparent'};
  display: block;
  margin: ${grid}px 0;
  padding: 0px;
`;

export const H1 = styled('h1', heading);
export const H2 = styled('h2', props => `
  ${heading(props)}
  font-size: 20px;
  font-weight: normal;
`);

export const P = styled('p', ({ grid }) => `
  margin: ${grid}px 0;
`);
