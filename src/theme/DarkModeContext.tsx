import React, { createContext, useState, useEffect } from 'react';

const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

function getInitialState() {
  let darkMode: boolean | undefined;

  if (typeof window !== 'undefined') {
    if (!localStorage && !window.matchMedia) {
      return false;
    }

    if (localStorage) {
      const darkModeValue = window.localStorage.getItem('darkMode');
      darkMode = darkModeValue ? JSON.parse(darkModeValue) : false;
    } else if (window.matchMedia) {
      darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  }

  return darkMode;
}

function DarkModeProvider(props) {
  const [darkMode, setDarkMode] = useState(getInitialState);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    window.localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{props.children}</DarkModeContext.Provider>;
}

export { DarkModeContext, DarkModeProvider };
