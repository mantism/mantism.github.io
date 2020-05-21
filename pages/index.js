import About from '../components/About';
import Work from '../components/Work';
import Projects from '../components/Projects';
import Blob from '../components/Blob';
import SideNav from '../components/SideNav';
import React, { useState, useRef, useEffect} from 'react';
import useDocumentScrollThrottled from '../hooks/useDocumentScrollThrottled';

const MIN_SCROLL_NAV = 25;
const MIN_SCROLL_TO_SHOW_WORK = 300;
const MIN_SCROLL_TO_SHOW_PROJ = 900;
const MIN_SCROLL_TO_MAX_WIDTH = 5000;
const TIMEOUT_DELAY = 100;

const Home = () => {
  const [shouldShowSideNav, setShouldShowSideNav] = useState(false);
  const [shouldShowWork, setShouldShowWork] = useState(false);
  const [shouldExpandToMax, setShouldExpandToMax] = useState(false);
  const [shouldShowProjects, setShouldShowProjects] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const aboutRef = useRef(null); 
  const workRef = useRef(null);
  const projectsRef = useRef(null);
  const trickingRef = useRef(null);

  const handleNavClick = (section) => {
    setActiveSection(section);
    switch (section) {
      case 'about':
        scrollToRef(aboutRef, 300);
        break;
      case 'work':
        scrollToRef(workRef);
        break;
      case 'projects':
        scrollToRef(projectsRef);
        break;
      case 'tricking':
        scrollToRef(trickingRef);
      default:
        alert('whoa how did this happen?! please email me so I can bugfix :)');
    }
  }

  const scrollToRef = (ref, offset=0) => {
    window.scrollTo(0, ref.current.offsetTop - offset)
  };

  useEffect(() => {
    handleNavClick.bind(this);
  }, []);
  

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
        <SideNav display={shouldShowSideNav} section={activeSection} handleClick={handleNavClick}/>
        <div className={`content ${shouldShowProjects ? 'expanded' : ''}`}>
          <About ref={aboutRef}/>
          <Work ref={workRef} display={shouldShowWork}/>
          <Projects ref={projectsRef} display={shouldShowProjects}/>
        </div>
      </main>
      <style jsx>{`
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
          text-align: center;
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
