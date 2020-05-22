import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconStyle = {
  color: '#B3DDD1'
}

const Projects = (props) => {
  return (
    <div className={`projects ${props.display ? 'visible' : 'hidden'}`} ref={props.refProp}>
      <FontAwesomeIcon icon='coffee' size='3x' style={iconStyle}/>
      <h2>Projects</h2>
      <div className='grid'>
        <div className='card'>
          <h3>vertigotricking.com</h3>
          <p>Website for vertigo built with next.js</p>
        </div>
        <div className='card'>
          <h3>Trick Stats</h3>
          <p>Tricking survey blah blah blah</p>
        </div>
        <div className='card'>
          <h3>VR Lighting Design</h3>
          <p>Something something senior design project, something where clicking
            reveals a video/gif of the project
          </p>
        </div>
        <div className='card'>
          <h3>PennOS</h3>
          <p>Systems programming project cis380, talk about fat filesystem yeet yo yo</p>
        </div>
        <div className='card'>
          <h3>Defend the Orchard</h3>
          <p>Another Unreal Project? :o</p>
        </div>
        <div className='card'>
          <h3>Flying Mantis Search Engine</h3>
          <p>Search Engine project that i'm proud of ya know? :P</p>
        </div>
      </div>
      <style jsx>{`
        .projects {
          padding-top: 5rem;
          text-align: center;
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
      `}</style>
    </div>
  )
};

export default Projects;