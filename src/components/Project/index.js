import React from 'react';

import {
  Body,
  Container,
  Description,
  Footer,
  Header,
  StarLabel,
  StarsContainer,
  StartIcon,
  TechsContainer,
  Tech,
  Title,
} from './styles';

function Project({ projectInfo }) {
  const { techs, href, title, description } = projectInfo;

  function techsArrayToString(techs) {
    let str = '';

    techs.forEach((tech, index, array) => {
      str += index === array.length - 1 ? tech : `${tech} • `;
    });

    return str;
  }

  return (
    <Container href={href}>
      <Header>
        <TechsContainer>
          <Tech>{techsArrayToString(techs)}</Tech>
        </TechsContainer>
      </Header>

      <Body>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Body>

      <Footer>
        <StarsContainer>
          <StartIcon />
          <StarLabel>4,027</StarLabel>
        </StarsContainer>
      </Footer>
    </Container>
  );
}

export default Project;
