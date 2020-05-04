import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faHeart } from '@fortawesome/free-solid-svg-icons'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <Head>
          <title>Mikael Mantis</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className='container'>
          <Component {...pageProps} />
          <footer>
            <FontAwesomeIcon icon={faCode} style={{margin: '0.5rem'}}/> with <FontAwesomeIcon icon={faHeart} style={{margin: '0.5rem'}}/> by Mikael Mantis
          </footer>
        </div>
        <style jsx>{`
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
            padding: 0 1rem;
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
          }

          * {
            box-sizing: border-box;
          }


        `}</style>
      </React.Fragment>
    )
  }
}

export default MyApp