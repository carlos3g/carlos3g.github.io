import { FC, useCallback, useEffect, useState } from 'react';

import { Project } from './components';
import { githubService } from '../../services';
import { IProject } from '../../interfaces';
import { getStaticData } from './data';
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

const { projectNames, socialMedias } = getStaticData();

const Home: FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const renderProjects = () =>
    projects.map((p) => <Project data={p} key={p.name} />);

  const fetchProjects = useCallback(async () => {
    const result = await githubService.getRepositories(projectNames);

    setProjects(result);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <Container>
      <AboutMe>
        <Details>
          <Title>
            Hello, I&#39;m <br /> Carlos Mesquita.
          </Title>
          <Description>
            Eu sou o Carlos, um jovem apaixonado por aprender coisas novas,
            tecnologia, programação e algoritmos! Atualmente eu sou um estudante
            no Instituto Federal do Piauí.
          </Description>
        </Details>

        <SocialMedias>
          {socialMedias.map((s) => (
            <a target="_blank" rel="noreferrer" href={s.url} key={s.url}>
              <img src={s.icon} alt="" width={20} />
            </a>
          ))}
        </SocialMedias>
      </AboutMe>

      <Projects loaded={loading}>
        {loading ? <Loader /> : renderProjects()}
      </Projects>
    </Container>
  );
};

export default Home;
