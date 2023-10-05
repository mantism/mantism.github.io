import React, { FunctionComponent } from 'react';
import styled, { ColorTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { DarkMode } from 'use-dark-mode';

interface IDarkModeToggleProps {
  darkMode: DarkMode;
}

interface IDarkModeStyledButtonProps {
  theme: ColorTheme;
}

const StyledButton = styled.button`
  border: none;
  background-color: ${(props: IDarkModeStyledButtonProps) => props.theme.bg.primary};

  svg {
    color: ${(props: IDarkModeStyledButtonProps) => props.theme.text.links};
  }

  &:hover,
  &:focus,
  &:active {
    border: none;
    outline: none;
  }
`;

const DarkModeToggle: FunctionComponent<IDarkModeToggleProps> = (props) => {
  const { darkMode } = props;

  return (
    <StyledButton aria-label="dark-mode toggle" onClick={darkMode.toggle}>
      {darkMode.value ? <FontAwesomeIcon icon={solid('moon')} /> : <FontAwesomeIcon icon={solid('sun')} />}
    </StyledButton>
  );
};

export default DarkModeToggle;
