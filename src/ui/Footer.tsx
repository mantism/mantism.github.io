import { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { duotone, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import styled, { ColorTheme } from 'styled-components';
import { breakpoints } from './constants';

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
  flex-direction: column;

  @media (max-width: ${breakpoints.sm}) {
    padding-top: 0;
    width: 80%;
  }

  .footer-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tertiary {
    color: ${(props: IFooterProps) => props.theme.text.tertiary};
  }
`;

const FooterComponent: FunctionComponent = () => {
  return (
    <Footer>
      <div className="footer-section">
        <FontAwesomeIcon icon={duotone('code')} style={{ margin: '0.5rem' }} /> with{' '}
        <FontAwesomeIcon icon={solid('heart')} style={{ margin: '0.5rem' }} />
        by Mikael Mantis{' '}
      </div>
      <div className="footer-section tertiary">Last Updated 2024</div>
    </Footer>
  );
};

export default FooterComponent;
