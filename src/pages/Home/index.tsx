import { FC, useCallback, useEffect, useState } from 'react';
import { Project } from '../../components';
import api from '../../services/api';
import { IProject } from '../../types';
import { projectNames, socialMedias } from './data';
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

const renderSocialMedias = () =>
  socialMedias.map((s) => (
    <a target="_blank" rel="noreferrer" href={s.url} key={s.url}>
      <img src={s.icon} alt="" width={20} />
    </a>
  ));

const Home: FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const renderProjects = useCallback(
    () => projects.map((p) => <Project data={p} key={p.name} />),
    [projects]
  );

  const fetchProjects = useCallback(async () => {
    const promises = projectNames.map(async (pN) => {
      const project = (await api.get(`/repos/${pN}`)).data;
      const techs = Object.keys((await api.get(`/repos/${pN}/languages`)).data);
      return { ...project, techs };
    });
    const result = await Promise.all(promises);

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
        <SocialMedias>{renderSocialMedias()}</SocialMedias>
      </AboutMe>

      <Projects loaded={loading}>
        {loading ? <Loader /> : renderProjects()}
      </Projects>
    </Container>
  );
};

export default Home;
