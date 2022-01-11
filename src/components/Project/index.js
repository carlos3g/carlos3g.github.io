import { memo } from 'react';
import {
  Body,
  Container,
  Description,
  Footer,
  Header,
  Stars,
  StarIcon,
  Techs,
  Title,
} from './styles';

const Project = ({ data }) => {
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
          {stargazers_count}
        </Stars>
      </Footer>
    </Container>
  );
};

export default memo(Project);
