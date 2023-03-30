// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    baseFontSize: number;
    fontSizes: string[];
    fontWeights: {
      caption: number;
      body: number;
      subheading: number;
      link: number;
      bold: number;
      heading: number;
    };
    lineHeights: {
      body: number;
      heading: number;
      code: number;
    };
  }

  export interface ColorTheme extends DefaultTheme {
    bg: {
      primary: string;
      secondary: string;
      inset: string;
      input: string;
    },
    borderColor: string;
    boxShadow: {
      light: string;
      dark: string;
    },
    boxButton: {
      light: string;
      dark: string;
    },
    circleButton: {
      light: string;
      dark: string;
    },
    circleShadow: {
      light: string;
      dark: string;
    },
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      quarternary: string;
      placeholder: string;
      links: string;
      onPrimary: string;
    },
  }
}
