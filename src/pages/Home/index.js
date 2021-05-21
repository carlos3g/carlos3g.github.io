import React from 'react';

import { Project } from '../../components';

import {
  Container,
  AboutMeContainer,
  Title,
  Description,
  ProjectsContainer,
  SocialContainer,
  IconContainer,
  LinkedinIcon,
  GithubIcon,
  GmailIcon,
  Details,
} from './styles';

const projects = [
  {
    techs: ['Javascript', 'Expo'],
    href: 'https://github.com/carlos3g/expo-anime-finder',
    title: 'Anime Finder',
    description: 'Find an anime through an image',
  },
  {
    techs: ['Javascript', 'Expo'],
    href: 'https://github.com/carlos3g/expo-bmi-calc',
    title: 'expo-bmi-calc',
    description: 'A BMI calculator made with React Native & Expo',
  },
  {
    techs: ['Javascript', 'Expo'],
    href: 'https://github.com/carlos3g/expo-basic',
    title: 'expo-basic',
    description:
      'A expo template with basic configs and packages already configured.',
  },
  {
    techs: ['Typescript', 'ReactJS', 'Express', 'Expo'],
    href: 'https://github.com/carlos3g/proffy',
    title: 'proffy',
    description:
      'Class marketplace system developed during NLW#2 | @Rocketseat',
  },
  {
    techs: ['Javascript', 'HTML', 'CSS'],
    href: 'https://github.com/carlos3g/boxy',
    title: 'boxy',
    description: 'A border-radius generator',
  },
  {
    techs: ['Javascript', 'HTML', 'CSS'],
    href: 'https://github.com/carlos3g/getkcal',
    title: 'getkcal',
    description: 'A useful calorie calculator',
  },
  {
    techs: ['Unity'],
    href: 'https://github.com/carlos3g/bugs-evolution',
    title: 'bugs-evolution',
    description: 'Simple game created to teach the theory of evolution',
  },
  {
    techs: ['ShellScript'],
    href: 'https://github.com/carlos3g/my-linux-workspace',
    title: 'my-linux-workspace',
    description:
      'Configure your recently installed linux distribution with this repo!',
  },
];

const socialMedias = [
  { url: 'https://linkedin.com/in/carlos3g', icon: <LinkedinIcon /> },
  { url: 'https://github.com/carlos3g', icon: <GithubIcon /> },
  { url: 'mailto:carlosmesquita156@gmail.com', icon: <GmailIcon /> },
];

function Home() {
  const renderProjects = () =>
    projects.map((project, index) => (
      <Project projectInfo={project} key={index} />
    ));

  const renderSocialMedias = () =>
    socialMedias.map((socialMedia, index) => (
      <IconContainer href={socialMedia.url} key={index}>
        {socialMedia.icon}
      </IconContainer>
    ));

  return (
    <Container>
      <AboutMeContainer>
        <Details>
          <Title>
            Hello, I’m
            <br />
            Carlos Mesquita.
          </Title>
          <Description>
            Eu sou o Carlos, um jovem apaixonado por aprender coisas novas,
            tecnologia, programação e algoritmos! atualmente eu sou um estudante
            no Instituto Federal do Piauí.
          </Description>
        </Details>

        <SocialContainer>{renderSocialMedias()}</SocialContainer>
      </AboutMeContainer>

      <ProjectsContainer>{renderProjects()}</ProjectsContainer>
    </Container>
  );
}

export default Home;
