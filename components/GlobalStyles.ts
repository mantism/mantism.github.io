import { ColorTheme, createGlobalStyle } from 'styled-components';

interface IGlobalStyleProps {
  theme: ColorTheme;
}

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Open Sans, sans-serif;
    font-size: ${(props: IGlobalStyleProps) => props.theme.baseFontSize}em;
    line-height: ${props => props.theme.lineHeights.body};
    scroll-behavior: smooth;
    background: ${props => props.theme.bg.primary};
    color: ${props => props.theme.text.primary};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Roboto, sans-serif;
  }

  a, a:visited {
    color: ${props => props.theme.text.links};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  * {
    box-sizing: border-box;
  }

  @keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @-moz-keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @-webkit-keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @-ms-keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @-o-keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .visible {
    display: block;
    -webkit-animation: fadein 0.5s;
    -moz-animation: fadein 0.5s;
    -ms-animation: fadein 0.5s;
    -o-animation: fadein 0.5s;
    animation: fadein 0.5s;
  }

  .hidden {
    opacity: 0;
  }

  @media (min-width: 120em) {
    html
    body {
      font-size: ${props => props.theme.baseFontSize * 1.2}em;
      line-height: ${props => props.theme.lineHeights.body * 1.2};
    }
  }
`

export default GlobalStyle;