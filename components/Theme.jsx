const light = {
  bg: {
    primary: '#ffffff',
    secondary: '#eaeaea',
    inset: '#e2e4e8',
    input: 'rgba(65, 67, 78, 0, 0.12'
  },
  text: {
    primary: '#050505',
    secondary: '#2f3037',
    tertiary: '#525560',
    quarternary: '#9194a1',
    placeholder: 'rgba(82,85,96,0.5)',
    onPrimary: '#ffffff',
    links: '#0070f3'
  },
  borderColor: '#eaeaea',
  boxShadow: {
    light: '#ffffff',
    dark: '#b8b8b8'
  },
  boxButton: {
    light: '#0078ff',
    dark: '#0065db'
  },
  circleButton: {
    light: '#ffffff',
    dark: '#e6e6e6'
  },
  circleShadow: {
    light: '#ffffff',
    dark: '#fcfcfc'
  },


}

const dark = {
  bg: {
    primary: '#282a36',
    secondary: '#44475a',
    inset: '#111111',
    input: 'rgba(191,193,201,0.12)'
  },
  text: {
    primary: '#f8f8f2',
    secondary: '#e3e4e8',
    tertiary: '#a9abb6',
    quarternary: '#6c6f7e',
    placeholder: 'rgba(145,148,161,0.5)',
    links: '#6272a4',
    //links: '#8be9fd'
  },
  borderColor: '#44475a',
  boxShadow: {
    light: '#2e303e',
    dark: '#22242e'
  },
  boxButton: {
    light: '#697aaf',
    dark: '#586794'
  },
  circleButton: {
    light: '#2b2d3a',
    dark: '#242631'
  },
  circleShadow: {
    light: '#282a37',
    dark: '#282a35'
  },
  // ...
}

const defaultTheme = {
  fontSizes: [
    '14px', // 0
    '16px', // 1
    '18px', // 2
    '22px', // 3
    '26px', // 4
    '32px', // 5
    '40px'  // 6
  ],
  fontWeights: {
    caption: 100,
    body: 400,
    subheading: 500,
    link: 600,
    bold: 700,
    heading: 800,
  },
  lineHeights: {
    body: 1.25,
    heading: 1.5,
    code: 1.6,
  },
  baseFontSize: '1',

  // ...
};

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark}