import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faYoutubeSquare, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faBars, faHome, faTimes, faCode, faHeart, faCoffee, faSuitcase} from '@fortawesome/free-solid-svg-icons';
import Providers from '../components/Providers';
import Footer from '../components/Footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

library.add(faBars, faHome, faTimes, faCode, faHeart, faCoffee, faSuitcase, faLinkedin, faGithub, faYoutubeSquare, faInstagram)
/*export function reportWebVitals(metric) {
  console.log(metric)
}*/

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    // base font and line heights measured in em
    const baseFontSize = 1;
    const baseLineHeight = 1.25
    return (
      <React.Fragment>
        <Providers>
          <Component {...pageProps} />
        </Providers>
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: Open Sans, sans-serif;
            font-size: ${baseFontSize}em;
            line-height: ${baseLineHeight}em;
            scroll-behavior: smooth;
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: Roboto, sans-serif;
          }

          a, a:visited {
            color: #0070f3;
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

          @media (min-width: 64em) {
            html
            body {
              font-size: ${baseFontSize * 1.2}em;
              line-height: ${baseLineHeight * 1.2}em;
            }
          }

          @media (min-width: 85.375em) {
            html
            body {
              font-size: ${baseFontSize * 1.3}em;
            }
          }

          @media (min-width: 120em) {
            html
            body {
              font-size: ${baseFontSize * 1.4}em;
              line-height: ${baseLineHeight * 1.4}em;
            }
          }
        `}</style>
      </React.Fragment>
    )
  }
}

export default MyApp