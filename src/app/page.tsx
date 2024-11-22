'use client';
import { About } from '../features/home/About';
import { Tricking } from '../features/home/Tricking';
import Layout from '../ui/Layout';
import { useState, useRef, useContext, RefObject } from 'react';
import useDocumentScroll from '../../hooks/useDocumentScroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { DefaultTheme, ThemeContext } from 'styled-components';
import { NextPage } from 'next/types';
import Image from 'next/image';
import SideNav from '../features/SideNav';
import { Title } from '../ui/Title';
import { Caption } from '../ui/Caption';
import { Main } from '../ui/Main';
import { Content } from '../ui/Content';

const MIN_SCROLL_TO_SHOW_NAV = 25;
const TIMEOUT_DELAY = 0;

interface IHomePageProps {
  darkMode: boolean;
}

const Home: NextPage = (props: IHomePageProps) => {
  const [shouldShowSideNav, setShouldShowSideNav] = useState(false);
  const [shouldShowTricking, setShouldShowTricking] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const aboutRef = useRef<HTMLDivElement>(null);
  const trickingRef = useRef<HTMLDivElement>(null);
  const theme: DefaultTheme | undefined = useContext(ThemeContext);

  const handleNavClick = (section: string) => {
    switch (section) {
      case 'about':
        scrollToRef(aboutRef, 500);
        break;
      case 'tricking':
        scrollToRef(trickingRef);
        break;
      default:
        alert('whoa how did this happen?! please email me so I can bugfix :)');
    }
  };

  const scrollToRef = (ref: RefObject<HTMLElement>, offset = 0) => {
    if (!ref.current) {
      return;
    }
    window.scrollTo(0, ref.current.offsetTop + 20 - offset);
  };

  useDocumentScroll((callbackData: { currentScrollTop: number }) => {
    const { currentScrollTop } = callbackData;
    const scrolledForNav = currentScrollTop > MIN_SCROLL_TO_SHOW_NAV;
    const scrolledToTricking = trickingRef.current ? currentScrollTop > trickingRef.current.offsetTop : false;

    if (scrolledToTricking) {
      setActiveSection('tricking');
    } else {
      setActiveSection('about');
    }

    setTimeout(() => {
      // sets state only once
      setShouldShowSideNav((prev) => (prev ? prev : scrolledForNav));
      setShouldShowTricking((prev) => (prev ? prev : scrolledToTricking));
    }, TIMEOUT_DELAY);
  });

  return (
    <Layout>
      <Title>Hi, I&apos;m Mikael</Title>
      <Image src="/me_v2.png" alt="drawing of me (mikael mantis)" width="132" height="132" />
      <Caption theme={theme}>
        <FontAwesomeIcon icon={solid('map-marker-alt')} /> Los Angeles, CA
      </Caption>
      <Main>
        <SideNav
          display={shouldShowSideNav}
          section={activeSection}
          handleClick={handleNavClick}
          darkMode={props.darkMode}
        />
        <Content>
          <About ref={aboutRef} />
          <Tricking ref={trickingRef} display={shouldShowTricking} />
        </Content>
      </Main>
    </Layout>
  );
};

export default Home;
