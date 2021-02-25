import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      <FontAwesomeIcon icon={darkMode.value ? 'moon' : 'sun'}/>
    </StyledButton>
  );
};

export default DarkModeToggle;