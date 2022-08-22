import styled, { keyframes } from 'styled-components';
import { breakpoints } from '../../constants/style';

const spinAnimation = keyframes`
  to {
    -webkit-transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  padding: 14vh;
  height: 100vh;

  @media ${breakpoints.mobileL} {
    flex-direction: column;
    padding: 5vh;
  }
`;

export const AboutMe = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media ${breakpoints.mobileL} {
    width: auto;
    margin-bottom: 4rem;
  }
`;

export const Details = styled.div``;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 5.8rem;
  line-height: 6.4rem;
`;

export const Description = styled.p`
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: #949495;
  margin-top: 3.2rem;
  width: 80%;

  @media ${breakpoints.mobileL} {
    width: auto;
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  a + a {
    margin-left: 3.8rem;
  }

  @media ${breakpoints.mobileL} {
    justify-content: center;
    margin-top: 2rem;
  }
`;

export const Projects = styled.div<{ loaded: boolean }>`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  align-items: ${({ loaded }) => (loaded ? 'flex-end' : 'center')};
  justify-content: ${({ loaded }) => (loaded ? 'default' : 'center')};
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  a + a {
    margin-top: 8px;
  }

  @media ${breakpoints.mobileL} {
    width: auto;
    align-items: center;
    overflow: visible;
  }
`;

export const Loader = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 0.8rem solid rgba(255, 255, 255, 0.08);
  border-top-color: #4d19e6;
  animation: ${spinAnimation} 2s infinite linear;
`;
