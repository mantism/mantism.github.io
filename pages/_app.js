import React from 'react';
import App from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub, faYoutubeSquare, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faBars, faHome, faTimes, faCode, faHeart, faCoffee, faSuitcase, faMoon, faSun, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import Providers from '../components/Providers';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

library.add(faBars, faHome, faTimes, faCode, faHeart, faCoffee, 
  faSuitcase, faLinkedin, faGithub, faYoutubeSquare, faInstagram, faMoon, faSun, faMapMarkerAlt)
/*export function reportWebVitals(metric) {
  console.log(metric)
}*/

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <Providers>
          <Component {...pageProps} />
        </Providers>
      </React.Fragment>
    )
  }
}

export default MyApp