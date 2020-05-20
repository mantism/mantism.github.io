import Icons from '../components/Icons';
import Work from '../components/Work';
import Projects from '../components/Projects';
import Blob from '../components/Blob';
import SideNav from '../components/SideNav';
import React, { useState,  } from 'react';
import useDocumentScrollThrottled from '../hooks/useDocumentScrollThrottled';

const Home = () => {
  const [shouldShowSideNav, setShouldShowSideNav] = useState(false);
  const [shouldShowWork, setShouldShowWork] = useState(false);
  const [shouldExpandToMax, setShouldExpandToMax] = useState(false);
  const [shouldShowProjects, setShouldShowProjects] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const MIN_SCROLL_NAV = 25;
  const MIN_SCROLL_TO_SHOW_WORK = 300;
  const MIN_SCROLL_TO_SHOW_PROJ = 800;
  const MIN_SCROLL_TO_MAX_WIDTH = 5000;
  const TIMEOUT_DELAY = 100;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const scrolledForNav = currentScrollTop > MIN_SCROLL_NAV;
    const scrolledToWork = currentScrollTop > MIN_SCROLL_TO_SHOW_WORK;
    const scrolledToProjects = currentScrollTop > MIN_SCROLL_TO_SHOW_PROJ;
    const scrolledToMaxWidth = currentScrollTop > MIN_SCROLL_TO_MAX_WIDTH;
    if (scrolledToWork && !scrolledToProjects) {
      setActiveSection('work');
    } else if (scrolledToProjects) {
      setActiveSection('projects');
    } else {
      setActiveSection('about');
    }

    setTimeout(() => {
      // sets state only once
      setShouldShowSideNav(prev => prev ? prev : scrolledForNav);
      setShouldShowWork(prev => prev ? prev : scrolledToWork);
      setShouldShowProjects(prev => prev ? prev :scrolledToProjects);
      setShouldExpandToMax(prev => prev ? prev : scrolledToMaxWidth);
    }, TIMEOUT_DELAY);
  });

  return (
    <React.Fragment>
      <h1 className='title'>
        Mikael Mantis
      </h1>
      <img src='/me.png'></img>
      <main>
        
        <SideNav display={shouldShowSideNav} section={activeSection}/>
        <div className={`content ${shouldShowProjects ? 'expanded' : ''}`}>
          <p className='description'>
            I'm currently a Software Engineer at BlackRock, Inc. where I have been 
            rotating amongst various development teams within the Aladdin Product Group.
            <br/><br/>
            I graduated from the University of Pennsylvania in May 2018 with a Bachelor's 
            in Computer Science from the School of Engineering. 
            <br/><br/>
            In my free time I like brewing coffee, reading sci-fi, and practicing this sport called tricking!
             I also co-run a tricking event brand called <a href='https://vertigotricking.com'>Vertigo Tricking.</a>
          </p>
          <div style={{textAlign: 'center'}}>
            Feel free to reach me at: <br/>
            E: <a href="mailto:mikael.mantis7@gmail.com">mikael.mantis7@gmail.com</a><br/><br/>
            <Icons/>
          </div>
          <Work display={shouldShowWork}/>
          <Projects display={shouldShowProjects}/>
        </div>
      </main>
      <style jsx>{`
        .massive-random-content {
          height: 1000px;
          width: 100%;
        }

        main {
          display: flex;
          flex-direction: row;
        }

        .content {
          padding-top: 2rem;
          margin: 0 auto;
          flex: 1;
          max-width: 600px;
          transition: max-width 0.5s;
        }

        .expanded {
          max-width: 750px;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
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
    </React.Fragment>
  )
}
  

export default Home
