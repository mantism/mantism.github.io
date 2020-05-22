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
          <h3>Vertigo Tricking</h3>
          <p> Single page web app for Vertigo Tricking, a Philadelphia based tricking 
            organization that runs a bi-annual event seeing up to 100 attendees worlwide.
          </p>
          <p className='code'><FontAwesomeIcon icon='code' size='xs'/> with next.js</p>
        </div>
        <div className='card'>
          <h3>Trick Stats</h3>
          <p> Single page application that compiles data and displays interactive graphics 
            related to the sport of martial arts tricking. Data collected via survey in 2016 
            with 300+ responses. Rewritten in December 2017.
          </p>
          <p className='code'><FontAwesomeIcon icon='code' size='xs'/> with React, scss, D3.js</p>
        </div>
        <div className='card'>
          <h3>VR Lighting Design</h3>
          <p>
            Virtual experience developed for Oculus that places the user in
            an environment for previewing light shows. Lights could be configured 
            manually or light shows could be pre-configured and loaded via art-net.
          </p>
          <p className='code'><FontAwesomeIcon icon='code' size='xs'/> with C++, Unreal Engine</p>
        </div>
        <div className='card'>
          <h3>PennOS</h3>
          <p>
            Operating systems final project. Developed a flat file system using 
            the FAT architecture, system calls modeled after UNIX system calls 
            to interact with the file system, and a UNIX-like shell using those system calls. 
          </p>
          <p className='code'><FontAwesomeIcon icon='code' size='xs'/> with C</p>
        </div>
        <div className='card'>
          <h3>Flying Mantis Search Engine</h3>
          <p>Internet and Web Systems final project. Developed search engine as java servlet 
            running on a Jetty-like server implementation running on AWS EC2. Retrieved search results from 
            AWS RDS instance along with search results from Amazon using Amazon's Product Advertising API
          </p>
          <p className='code'><FontAwesomeIcon icon='code' size='xs'/> with Java, JS, HTML, CSS</p>
        </div>
        <p className='footnote'>Also this website was a fun project built with next.js, you can view the source <a href='https://github.com/mantism/personal-website'>here</a> </p>
      </div>
      <style jsx>{`
        .projects {
          padding-top: 3rem;
          text-align: center;
          border-bottom: 1px solid #eaeaea;
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