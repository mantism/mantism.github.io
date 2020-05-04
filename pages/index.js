import Icons from '../components/Icons';
import Blob from '../components/Blob';

const Home = () => (
  <div>
    <h1 className='title'>
      Mikael Mantis
    </h1>
    <Blob svg='/blob-shape.svg'/>
    <main>
      <div className='content'>
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
        <div className='massive-random-content'>
        </div>
      </div>
    </main>

    <style jsx>{`
      .massive-random-content {
        height: 1000px;
        width: 100%;
      }
      main {
        padding: 5rem 0rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 500px;
        max-height: 600px;
      }

      .content {
        overflow: auto;
      }

      a, a:visited {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0 auto;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: left;
      }

      .description {
        line-height: 1.5;
        font-size: 1rem;
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

        .title {
          text-align: center;
        }
      }

      img {
        margin: 1rem 0;
      }
    `}</style>
  </div>
)

export default Home
