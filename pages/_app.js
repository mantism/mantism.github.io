import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faYoutubeSquare, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faCode, faHeart, faCoffee, faSuitcase, faLink} from '@fortawesome/free-solid-svg-icons';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

library.add(faCode, faHeart, faCoffee, faSuitcase, faLinkedin, faGithub, faYoutubeSquare, faInstagram)
/*export function reportWebVitals(metric) {
  console.log(metric)
}*/

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <Head>
          <title>Mikael Mantis</title>
          <meta charset="utf-8" />
          <meta name='description' content='Personal website of Mikael Mantis, Software Engineer and Martial Arts Tricker, currently based out of Philadelphia'/>
          <meta name="author" content="Mikael Mantis" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <div className='container'>
          <h1 className='title'>
            Mikael Mantis
          </h1>
          <Component {...pageProps} />
          <footer>
            <FontAwesomeIcon icon={faCode} style={{margin: '0.5rem'}}/> with <FontAwesomeIcon icon={faHeart} style={{margin: '0.5rem'}}/> by Mikael Mantis
          </footer>
        </div>
        <style jsx>{`
          .title {
            line-height: 1.15;
            font-size: 4rem;
            text-align: center;
          }

          footer {
            max-width: 550px;
            width: 50%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 1rem;
            position: relative;
            left: 0;
            bottom: 0;
          }

          footer img {
            margin-left: 0.5rem;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .container {
            min-height: 100vh;
            max-width: 100vw;
            padding: 10rem 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow-x: hidden;
          }     
        `}
        </style>
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

            scroll-behavior: smooth;
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
        `}</style>
      </React.Fragment>
    )
  }
}

export default MyApp