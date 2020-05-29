import styled from 'styled-components';
import Head from 'next/head';
import Footer from './Footer';

const StyledContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  padding: 10rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  @media (max-width: 37.5em) {
    padding: 2rem 0;
  }
`

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Head>
        <title>Mikael Mantis, Software Engineer</title>
        <meta httpEquiv='Content-Type' content='text/html' charSet='utf-8' />
        <meta name='description' content='Personal website of Mikael Mantis, Software Engineer and Martial Arts Tricker, currently based out of Philadelphia'/>
        <meta name='author' content='Mikael Mantis' />
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap' rel='stylesheet'></link>
        <link rel='canonical' href='https://mikaelmantis.com'/>
      </Head>
      <StyledContainer>
        {children}
        <Footer/>
      </StyledContainer>
    </React.Fragment>
  );
}

export default Layout;