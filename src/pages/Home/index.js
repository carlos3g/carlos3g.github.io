import React from 'react';

import Project from '../../components/Project';

import {
  Wrapper,
  AboutMeContainer,
  Title,
  Description,
  ProjectsContainer,
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
];

function App() {
  return (
    <Wrapper>
      <AboutMeContainer>
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
