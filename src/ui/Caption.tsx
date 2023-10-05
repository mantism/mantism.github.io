import styled, { ColorTheme } from 'styled-components';

export const Caption = styled.p`
  text-align: center;
  font-size: ${(props: { theme: ColorTheme }) => props.theme.baseFontSize * 0.8}em;
  font-weight: ${(props: { theme: ColorTheme }) => props.theme.fontWeights.caption};
`;
