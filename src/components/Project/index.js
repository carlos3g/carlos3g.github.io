import React, { memo } from 'react';

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
  const { techs, html_url, name, description, stargazers_count } = data;
  return (
    <Container href={html_url}>
      <Header>
        <Techs>{techs.join(' • ')}</Techs>
      </Header>

      <Body>
        <Title>{name}</Title>
        <Description>{description}</Description>
      </Body>

      <Footer>
        <Stars>
          <StarIcon />
          <StarsLabel>{stargazers_count}</StarsLabel>
        </Stars>
      </Footer>
    </Container>
  );
}

export default memo(Project);
