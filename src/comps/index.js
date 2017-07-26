import { styled } from '../utils/swc';

export const Align = styled(({ type }) => `
  text-align: ${type};
`);

export const Avatar = styled(`
  border-radius: 50%;
`, 'img');

export const Body = styled(({ backgroundColor, color, grid }) => `
  background-color: ${backgroundColor || 'white'};
  color: ${color || '#333'};
  display: block;
  font-family: Helvetica;
  height: 100%;
  margin: -8px;
  padding: ${grid}px;
`);

const heading = ({ grid, headingBackgroundColor }) => `
  background-color: ${headingBackgroundColor || 'transparent'};
  display: block;
  margin: ${grid}px 0;
  padding: 0px;
`;

export const H1 = styled(heading, 'h1');
export const H2 = styled(props => `
  ${heading(props)}
  font-size: 20px;
  font-weight: normal;
`, 'h2');

const p = ({ grid }) => `
  margin: ${grid}px 0;
`;

export const P = styled(p, 'p');

export const Note = styled((props) => `
  ${p(props)}
  font-size: 10px;
`, 'p');