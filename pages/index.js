import Head from 'next/head'
import Icons from '../components/Icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faHeart } from '@fortawesome/free-solid-svg-icons'

const Home = () => (
  <div className='container'>
    <Head>
      <title>Mikael Mantis</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main>
      <h1 className='title'>
        Hi, my name is Mikael Mantis
      </h1>

      <img src='/me.jpg' alt='picture of me'/>

      <p className='description'>
        I'm currently a Software Engineer at BlackRock, Inc. where I have been 
        rotating amongst various development teams within the Aladdin Product Group.
        <br/><br/>
        I graduated from the University of Pennsylvania in May 2018 with a Bachelor's 
        in Computer Science from the School of Engineering. 
        <br/><br/>
        In my free time I practice a sport called tricking and work on <a href='https://vertigotricking.com'>Vertigo Tricking</a>
      </p>
      <div style={{textAlign: 'center'}}>
        Feel free to reach me at: <br/>
        E: <a href="mailto:mikael.mantis7@gmail.com">mikael.mantis7@gmail.com</a><br/><br/>
        <Icons/>
      </div>
    </main>

    <footer>
      <FontAwesomeIcon icon={faCode} style={{margin: '0.5rem'}}/> with <FontAwesomeIcon icon={faHeart} style={{margin: '0.5rem'}}/> by Mikael Mantis
    </footer>

    <style jsx>{`
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

      main {
        padding: 5rem 0rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 1000px;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: left;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }

      img {
        margin: 1rem 0;
      }
    `}</style>

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
  </div>
)

export default Home
