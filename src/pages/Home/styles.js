import styled, { keyframes } from 'styled-components';

import devices from '../../styles/breakpoints';
import linkedinSVG from '../../assets/icons/linkedin.svg';
import githubSVG from '../../assets/icons/github.svg';
import gmailSVG from '../../assets/icons/gmail.svg';

const spinAnimation = keyframes`
  to {
    -webkit-transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  flex: 1;
  display: flex;

  padding: 14vh;

  @media ${devices.mobileL} {
    flex-direction: column;
    padding: 5vh;
  }
`;

export const AboutMe = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 40%;

  @media ${devices.mobileL} {
    width: auto;
    margin-bottom: 40px;
  }
`;

export const Details = styled.div``;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 5.8rem;
  line-height: 6.4rem;
`;

export const Description = styled.p`
  font-size: 1.4rem;
  line-height: 2.8rem;
  color: #949495;

  margin-top: 32px;
  width: 29.5vw;

  @media ${devices.mobileL} {
    width: auto;
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > * {
    margin-right: 38px;
  }

  @media ${devices.mobileL} {
    justify-content: center;
    margin-top: 20px;
  }
`;

export const IconWrapper = styled.a.attrs({
  target: '_blank',
})``;

export const LinkedinIcon = styled.img.attrs({
  src: linkedinSVG,
  width: 20,
})``;

export const GithubIcon = styled.img.attrs({
  src: githubSVG,
  width: 20,
})``;

export const GmailIcon = styled.img.attrs({
  src: gmailSVG,
  width: 20,
})``;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ loading }) => (loading ? 'center' : 'flex-end')};
  justify-content: ${({ loading }) => (loading ? 'center' : 'default')};

  width: 60%;
  height: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  @media ${devices.mobileL} {
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
  border-top: 0.8rem solid #4d19e6;

  animation: ${spinAnimation} 2s infinite linear;
`;
