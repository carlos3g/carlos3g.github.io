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
  Tech,
  Title,
} from './styles';

function Project({ projectInfo }) {
  const { tech, href, title, description } = projectInfo;
  return (
    <Container href={href}>
      <Header>
        <Tech>{tech}</Tech>
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
