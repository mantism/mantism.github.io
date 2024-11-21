import styled from 'styled-components';

export const Content = styled.div`
  padding-top: 2rem;
  margin: 0 auto;
  flex: 1;
  max-width: 650px;

  @media (max-width: 37.5em) {
    max-width: 300px;
  }

  @media (min-width: 120em) {
    max-width: 800px;
  }
`;
