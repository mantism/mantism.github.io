'use client';
import { lightTheme, darkTheme } from './Theme';
import { ColorTheme, ThemeProvider } from 'styled-components';
import React, { useState, useEffect, useContext } from 'react';
import GlobalStyle from './GlobalStyles';
import { DarkModeContext } from './DarkModeContext';

const Providers = (props) => {
  const [mounted, setMounted] = useState(false);
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    setMounted(true);
  }, []);
  const theme: ColorTheme = darkMode ? darkTheme : lightTheme;

  const children = React.Children.map(props.children, (child) => {
    return React.cloneElement(child, {
      darkMode,
    });
  });

  const body = (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      {children}
    </ThemeProvider>
  );

  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>;
  }

  return body;
};

export default Providers;
