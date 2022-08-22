import { FC, useCallback, useEffect, useState } from 'react';

import { Project } from './components';
import { githubService } from '../../services';
import { IProject } from '../../interfaces';
import { getStaticData } from '../../data';
import linkedinSVG from '../../assets/icons/linkedin.svg';
import githubSVG from '../../assets/icons/github.svg';
import gmailSVG from '../../assets/icons/gmail.svg';
import {
  AboutMe,
  Container,
  Description,
  Details,
  Loader,
  Projects,
  SocialMedias,
  Title,
} from './styles';

const socialMedias = [
  { url: 'https://linkedin.com/in/carlos3g', icon: linkedinSVG },
  { url: 'https://github.com/carlos3g', icon: githubSVG },
  { url: 'mailto:carlosmesquita156@gmail.com', icon: gmailSVG },
];

const { githubProjects, user } = getStaticData();

const Home: FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  const renderProjects = () =>
    projects.map((p) => <Project data={p} key={p.name} />);

  const fetchProjects = useCallback(async () => {
    const result = await githubService.getRepositories(githubProjects);

    setProjects(result);
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <Container>
      <AboutMe>
        <Details>
          <Title>
            Hello, I&#39;m <br /> {user.name}.
          </Title>
          <Description>{user.description}</Description>
        </Details>

        <SocialMedias>
          {socialMedias.map((s) => (
            <a target="_blank" rel="noreferrer" href={s.url} key={s.url}>
              <img src={s.icon} alt="" width={20} />
            </a>
          ))}
        </SocialMedias>
      </AboutMe>

      <Projects loaded={!!projects.length}>
        {projects.length ? renderProjects() : <Loader />}
      </Projects>
    </Container>
  );
};

export default Home;
