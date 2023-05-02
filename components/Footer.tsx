import { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { duotone, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import styled, { ColorTheme } from 'styled-components';

interface IFooterProps {
  theme: ColorTheme;
}

const Footer = styled.footer`
  max-width: 550px;
  width: 50%;
  height: 100px;
  border-top: 1px solid ${(props: IFooterProps) => props.theme.borderColor};
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
`;

const FooterComponent: FunctionComponent = () => {
  return (
    <Footer>
      <FontAwesomeIcon icon={duotone('code')} style={{ margin: '0.5rem' }} /> with{' '}
      <FontAwesomeIcon icon={solid('heart')} style={{ margin: '0.5rem' }} /> by Mikael Mantis, last updated 2023
    </Footer>
  );
};

export default FooterComponent;
