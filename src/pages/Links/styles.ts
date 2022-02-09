import styled from 'styled-components';
import devices from '../../styles/breakpoints';

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10vh 0;

  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;

export const Anchors = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 8vh;

  a + a {
    margin-top: 1.5rem;
  }
`;
