import React from 'react';

import Project from '../../components/Project';

import {
  Wrapper,
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
    tech: 'Javascript',
    href: 'https://github.com/carlos3g/expo-basic',
    title: 'expo-basic',
    description:
      'expo-basic is a expo template with basic configs and packages already configured.',
  },
  {
    tech: 'Unity',
    href: 'https://github.com/carlos3g/bugs-evolution',
    title: 'bugs-evolution',
    description: 'Simple game created to teach the theory of evolution',
  },
  {
    tech: 'ShellScript',
    href: 'https://github.com/carlos3g/my-linux-workspace',
    title: 'my-linux-workspace',
    description:
      'Configure your recently installed linux distribution with this repo!',
  },
];

function App() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default App;
