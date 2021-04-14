import React from 'react';

import Project from '../../components/Project';

import {
  Container,
  AboutMeContainer,
  Title,
  TopLine,
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
    href: 'https://github.com/carlos3g/expo-bmi-calc',
    title: 'expo-bmi-calc',
    description: 'A BMI calculator made with React Native & Expo',
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
    techs: ['Javascript', 'Expo'],
    href: 'https://github.com/carlos3g/expo-basic',
    title: 'expo-basic',
    description:
      'expo-basic is a expo template with basic configs and packages already configured.',
  },
  {
    techs: ['Typescript', 'ReactJS', 'Express', 'Expo'],
    href: 'https://github.com/carlos3g/proffy',
    title: 'proffy',
    description: 'Class marketplace developed during NLW#2 | @Rocketseat',
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

function App() {
  return (
    <Container>
      <TopLine />
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

        <SocialContainer>
          <IconContainer href="https://linkedin.com/in/carlos3g">
            <LinkedinIcon />
          </IconContainer>

          <IconContainer href="https://github.com/carlos3g">
            <GithubIcon />
          </IconContainer>

          <IconContainer href="mailto:carlosmesquita156@gmail.com">
            <GmailIcon />
          </IconContainer>
        </SocialContainer>
      </AboutMeContainer>

      <ProjectsContainer>
        {projects.map((project, index) => (
          <Project projectInfo={project} key={index} />
        ))}
      </ProjectsContainer>
    </Container>
  );
}

export default App;
