import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const StyledButton = styled.button`
  border: none;
  background-color: ${props => props.theme.bg.primary};

  svg {
    color: ${props => props.theme.text.links};
  }

  &:hover,
  &:focus,
  &:active {
    border: none;
    outline: none;
  }
`

const DarkModeToggle = ({darkMode}) => {

  return (
    <StyledButton aria-label='dark-mode toggle' onClick={darkMode.toggle}>
      {darkMode.value ? <FontAwesomeIcon icon={solid('moon')}/> : <FontAwesomeIcon icon={solid('sun')}/>}
    </StyledButton>
  );
};

export default DarkModeToggle;