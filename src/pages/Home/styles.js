import styled from 'styled-components';

import linkedinSVG from '../../assets/icons/linkedin.svg';
import githubSVG from '../../assets/icons/github.svg';
import gmailSVG from '../../assets/icons/gmail.svg';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  padding: 88px;
`;

export const AboutMeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 40%;
`;

export const Details = styled.div``;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 58px;
  line-height: 64px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: #949495;
  margin-top: 32px;
  width: 408px;
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  * {
    margin-right: 38px;
  }
`;

export const IconContainer = styled.a.attrs({
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

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 60%;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
