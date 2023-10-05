import { About } from '../components/About';
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
import styled, { ColorTheme } from 'styled-components';

const MIN_SCROLL_TO_SHOW_NAV = 25;
const TIMEOUT_DELAY = 0;

interface IHomePageProps {
  darkMode: boolean;
}

const Title = styled.h1`
  line-height: 1.15;
  text-align: center;
`;

const Caption = styled.p`
  text-align: center;
  font-size: ${(props: { theme: ColorTheme }) => props.theme.baseFontSize * 0.8}em;
  font-weight: ${(props: { theme: ColorTheme }) => props.theme.fontWeights.caption};
`;

const Content = styled.div`
  padding-top: 2rem;
  margin: 0 auto;
  flex: 1;
  max-width: 650px;

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
`;

const Main = styled.main`
  display: flex;
  flex-direction: row;
`;

const Home: NextPage = (props: IHomePageProps) => {
  const [shouldShowSideNav, setShouldShowSideNav] = useState(false);
  const [shouldShowTricking, setShouldShowTricking] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const aboutRef = useRef<HTMLDivElement>(null);
  const trickingRef = useRef<HTMLDivElement>(null);
  const theme: DefaultTheme = useContext(ThemeContext);

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

  const scrollToRef = (ref: MutableRefObject<HTMLElement>, offset = 0) => {
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
        <FontAwesomeIcon icon={solid('map-marker-alt')} /> Bay Area, CA
      </Caption>
      <Main>
        <NavWrapper
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
