import { lightTheme, darkTheme } from '../components/Theme'
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import React, { useState, useEffect} from 'react'
import GlobalStyle from '../components/GlobalStyles'

export default (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  const darkMode = useDarkMode(false, { storageKey: null, onChange: null })
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