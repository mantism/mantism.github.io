import { lightTheme, darkTheme } from './Theme'
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import React, { useState, useEffect} from 'react'
import GlobalStyle from './GlobalStyles'

const Providers = (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  const darkMode = useDarkMode(false);
  const theme = darkMode.value ? darkTheme : lightTheme;

  const children = React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      darkMode,
    });
  });

  const body = 
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      {children}
    </ThemeProvider>

  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{visibility: 'hidden'}}>{body}</div>
  }

  return body;
}

export default Providers;