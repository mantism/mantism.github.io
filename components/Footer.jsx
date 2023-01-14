import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { duotone, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import styled from 'styled-components';

const Footer = styled.footer`
  max-width: 550px;
  width: 50%;
  height: 100px;
  border-top: 1px solid ${props => props.theme.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  position: relative;
  left: 0;
  bottom: 0;

  @media (max-width: 37.5em) {
    padding-top: 0;
    width: 80%;
  }

  img {
    margin-left: 0.5rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const FooterComponent = (props) => {
  return (
    <Footer>
      <FontAwesomeIcon icon={duotone('code')} style={{margin: '0.5rem'}}/> with <FontAwesomeIcon icon={solid('heart')} style={{margin: '0.5rem'}}/> by Mikael Mantis, last updated 2023
    </Footer>
  );
}

export default FooterComponent;
