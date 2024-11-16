import React from 'react';
import App from 'next/app';
import Providers from '../src/theme/Providers';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import { config } from '@fortawesome/fontawesome-svg-core';
import { DarkModeProvider } from '../src/theme/DarkModeContext';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

/*export function reportWebVitals(metric) {
  console.log(metric)
}*/

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <DarkModeProvider>
          <Providers>
            <Component {...pageProps} />
          </Providers>
        </DarkModeProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;
