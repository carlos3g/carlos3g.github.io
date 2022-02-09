/* eslint-disable camelcase */
import { FC, memo } from 'react';
import { IProject } from '../../types';
import {
  Body,
  Container,
  Description,
  Footer,
  Header,
  StarIcon,
  Stars,
  Techs,
  Title,
} from './styles';

export interface ProjectProps {
  data: IProject;
}

const Project: FC<ProjectProps> = ({ data }) => {
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
