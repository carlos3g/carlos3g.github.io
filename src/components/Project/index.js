import React from 'react';

import {
  Body,
  Container,
  Description,
  Footer,
  Header,
  StarsLabel,
  Stars,
  StarIcon,
  Techs,
  Title,
} from './styles';

function Project({ data }) {
  const { techs, href, title, description } = data;

  return (
    <Container href={href}>
      <Header>
        <Techs>{techs.join(' • ')}</Techs>
      </Header>

      <Body>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Body>

      <Footer>
        <Stars>
          <StarIcon />
          <StarsLabel>4,027</StarsLabel>
        </Stars>
      </Footer>
    </Container>
  );
}

export default Project;
