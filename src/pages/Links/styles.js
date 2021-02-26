import styled from 'styled-components';

import devices from '../../assets/styles/breakpoints';

export const Wrapper = styled.div`
  flex: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 14vh;

  @media ${devices.mobileL} {
    flex-direction: column;
    padding: 5vh;
  }
`;

export const Container = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
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
