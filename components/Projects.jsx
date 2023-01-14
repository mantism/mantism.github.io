import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { duotone } from '@fortawesome/fontawesome-svg-core/import.macro';
import { ThemeContext } from 'styled-components';
import Link from 'next/link';

const iconStyle = {
  color: '#B3DDD1'
}

const Projects = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`projects ${props.display ? 'visible' : 'hidden'}`} ref={props.refProp}>
      <FontAwesomeIcon icon={duotone('coffee')} size='3x' style={iconStyle}/>
      <h2>Projects</h2>
      Heres a brief overview of some of my favorite/ongoing tricking projects! Be sure to check back here in the future (or follow me on <Link href='https://github.com/mantism'>GitHub</Link>) 
      they may or may not get replaced. 
      <div className='grid'>
        <Link href='https://vertigotricking.com'>
          <div className='card'>
            <h3>Vertigo Tricking</h3>
            <p> Online store for Vertigo Tricking, a Philadelphia based tricking 
              organization that runs a bi-annual event seeing up to 100 attendees worldwide.
            </p>
            <p className='code'><FontAwesomeIcon icon={duotone('code')} size='xs'/> with next.js, redux, stripe</p>
          </div>
        </Link>
        <div className='card'>
          <h3>US Tricking</h3>
          <p>
            TBA - 👀
          </p>
        </div>
        <Link href='https://trickstats.com'>
          <div className='card'>
            <h3>Trick Stats</h3>
            <p> Single page application that compiles data and displays interactive graphics 
              related to the sport of martial arts tricking. Data collected via survey in 2016 
              with 300+ responses. Rewritten in December 2017.
            </p>
            <p className='code'><FontAwesomeIcon icon={duotone('code')} size='xs'/> with React, scss, D3.js</p>
          </div>
        </Link>
        <p className='footnote'>Also this website was a fun project built with next.js, you can <a href='https://github.com/mantism/personal-website'>view the source here</a> </p>
      </div>
      <style jsx>{`
        .projects {
          padding-top: 3rem;
          text-align: center;
          border-bottom: 1px solid ${theme.borderColor};
          padding-bottom: 3rem;
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
          border: 1px solid ${theme.borderColor};
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        //tablet or smaller screen sizes (600px)
        @media (max-width: 37.5em) {
          .card {
            flex-basis: 95%;
          }
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: ${theme.text.links};
          border-color: ${theme.text.links};
        }

        .card h3 {
          margin: 0 0 1rem 0;
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.5;
        }

        .code {
          padding: 0.75rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .footnote {
          font-size: 0.75rem;
          font-weight: 200;
        }
      `}</style>
    </div>
  )
};

export default Projects;