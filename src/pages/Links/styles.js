import styled from 'styled-components';

import devices from '../../styles/breakpoints';

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 14vh;

  @media ${devices.mobileL} {
    flex-direction: column;
    padding: 5vh;
  }
`;

export const LinkersContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  margin-top: 5rem;
  padding-bottom: 4rem;
`;
