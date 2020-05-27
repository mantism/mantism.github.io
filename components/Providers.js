import { lightTheme, darkTheme } from '../components/Theme'
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import React, { useState, useEffect} from 'react'

export default ({children}) => {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  const { value } = useDarkMode(false, { storageKey: null, onChange: null })
  const theme = value ? darkTheme : lightTheme;

  const body = 
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>

    // prevents ssr flash for mismatched dark mode
    if (!mounted) {
      return <div style={{visibility: 'hidden'}}>{body}</div>
    }

    return body;
}