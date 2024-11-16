'use client';
import React, { FunctionComponent, useContext } from 'react';
import styled, { ColorTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { DarkModeContext } from '../theme/DarkModeContext';

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

const DarkModeToggle: FunctionComponent = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <StyledButton aria-label="dark-mode toggle" onClick={toggleDarkMode}>
      {darkMode ? <FontAwesomeIcon icon={solid('moon')} /> : <FontAwesomeIcon icon={solid('sun')} />}
    </StyledButton>
  );
};

export default DarkModeToggle;
