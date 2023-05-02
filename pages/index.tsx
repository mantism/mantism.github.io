import { About } from '../components/About';
import { Work } from '../components/Work';
import { Projects } from '../components/Projects';
import { Tricking } from '../components/Tricking';
import Layout from '../components/Layout';
import NavWrapper from '../components/NavWrapper';
import { useState, useRef, useContext, MutableRefObject } from 'react';
import useDocumentScroll from '../hooks/useDocumentScroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { DefaultTheme, ThemeContext } from 'styled-components';
import { NextPage } from 'next/types';
import Image from 'next/image';

const MIN_SCROLL_TO_SHOW_NAV = 25;
const TIMEOUT_DELAY = 0;

interface IHomePageProps {
  darkMode: boolean;
}

const Home: NextPage = (props: IHomePageProps) => {
  const [shouldShowSideNav, setShouldShowSideNav] = useState(false);
  const [shouldShowWork, setShouldShowWork] = useState(false);
  const [shouldShowProjects, setShouldShowProjects] = useState(false);
  const [shouldShowTricking, setShouldShowTricking] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const trickingRef = useRef<HTMLDivElement>(null);
  const theme: DefaultTheme = useContext(ThemeContext);

  const handleNavClick = (section: string) => {
    switch (section) {
      case 'about':
        scrollToRef(aboutRef, 500);
        break;
      case 'work':
        scrollToRef(workRef);
        break;
      case 'projects':
        scrollToRef(projectsRef);
        break;
      case 'tricking':
        scrollToRef(trickingRef);
        break;
      default:
        alert('whoa how did this happen?! please email me so I can bugfix :)');
    }
  };

  const scrollToRef = (ref: MutableRefObject<HTMLElement>, offset = 0) => {
    window.scrollTo(0, ref.current.offsetTop - offset);
  };

  useDocumentScroll((callbackData: { currentScrollTop: number }) => {
    const { currentScrollTop } = callbackData;
    const scrolledForNav = currentScrollTop > MIN_SCROLL_TO_SHOW_NAV;
    const scrolledToWork = workRef.current ? currentScrollTop > workRef.current.offsetTop : false;
    const scrolledToProjects = projectsRef.current ? currentScrollTop > projectsRef.current.offsetTop : false;
    const scrolledToTricking = trickingRef.current ? currentScrollTop > trickingRef.current.offsetTop : false;

    if (scrolledToWork && !scrolledToProjects) {
      setActiveSection('work');
    } else if (scrolledToProjects && !scrolledToTricking) {
      setActiveSection('projects');
    } else if (scrolledToTricking) {
      setActiveSection('tricking');
    } else {
      setActiveSection('about');
    }

    setTimeout(() => {
      // sets state only once
      setShouldShowSideNav((prev) => (prev ? prev : scrolledForNav));
      setShouldShowWork((prev) => (prev ? prev : scrolledToWork));
      setShouldShowProjects((prev) => (prev ? prev : scrolledToProjects));
      setShouldShowTricking((prev) => (prev ? prev : scrolledToTricking));
    }, TIMEOUT_DELAY);
  });

  return (
    <Layout>
      <h1 className="title">Hi, I&apos;m Mikael</h1>
      <Image src="/me_v2.png" alt="drawing of me (mikael mantis)" width="132" height="132" />
      <p className="caption">
        <FontAwesomeIcon icon={solid('map-marker-alt')} /> Bay Area, CA
      </p>
      <main>
        <NavWrapper
          display={shouldShowSideNav}
          section={activeSection}
          handleClick={handleNavClick}
          darkMode={props.darkMode}
        />
        <div className="content">
          <About ref={aboutRef} />
          <Work ref={workRef} display={shouldShowWork} />
          <Projects ref={projectsRef} display={shouldShowProjects} />
          <Tricking ref={trickingRef} display={shouldShowTricking} />
        </div>
      </main>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: row;
        }

        .title {
          line-height: 1.15;
          font-size: rem;
          text-align: center;
        }

        .content {
          padding-top: 2rem;
          margin: 0 auto;
          flex: 1;
          max-width: 650px;
        }

        //tablet or smaller screen sizes (600px)
        @media (max-width: 37.5em) {
          .content {
            max-width: 300px;
          }
        }

        @media (min-width: 120em) {
          .content {
            max-width: 800px;
          }
        }

        img {
          margin: 1rem 0;
          border-radius: 10px;
          box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
        }

        .caption {
          text-align: center;
          font-size: ${theme.baseFontSize * 0.8}em;
          font-weight: ${theme.fontWeights.caption};
        }
      `}</style>
    </Layout>
  );
};

export default Home;
