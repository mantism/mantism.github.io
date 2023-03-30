import React from 'react';
import styled from 'styled-components';
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
      <StyledContainer>
        {children}
        <Footer/>
      </StyledContainer>
    </React.Fragment>
  );
}

export default Layout;