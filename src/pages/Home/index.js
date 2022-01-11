import { useEffect, useState, useCallback } from 'react';
import api from '../../services/api';
import { Project } from '../../components';
import {
  Container,
  AboutMe,
  Title,
  Description,
  Projects,
  SocialMedias,
  IconWrapper,
  LinkedinIcon,
  GithubIcon,
  GmailIcon,
  Details,
  Loader,
} from './styles';

const projectNames = [
  'carlos3g/faire',
  'carlos3g/expo-anime-finder',
  'carlos3g/expo-bmi-calc',
  'carlos3g/proffy',
  'carlos3g/boxy',
  'carlos3g/getkcal',
];

const socialMedias = [
  { url: 'https://linkedin.com/in/carlos3g', icon: <LinkedinIcon /> },
  { url: 'https://github.com/carlos3g', icon: <GithubIcon /> },
  { url: 'mailto:carlosmesquita156@gmail.com', icon: <GmailIcon /> },
];

const renderSocialMedias = () =>
  socialMedias.map((s) => (
    <IconWrapper href={s.url} key={s.url}>
      {s.icon}
    </IconWrapper>
  ));

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const renderProjects = useCallback(
    () => projects.map((p, i) => <Project data={p} key={i} />),
    [projects]
  );

  const fetchProjects = useCallback(async () => {
    const promises = projectNames.map(async (pN) => {
      const project = (await api.get(`/repos/${pN}`)).data;
      const techs = Object.keys((await api.get(`/repos/${pN}/languages`)).data);
      return { ...project, techs };
    });
    const results = await Promise.all(promises);

    setProjects(results);
    setLoading(false);
  }, []);

  useEffect(fetchProjects, [fetchProjects]);

  return (
    <Container>
      <AboutMe>
        <Details>
          <Title>
            Hello, I’m
            <br />
            Carlos Mesquita.
          </Title>
          <Description>
            Eu sou o Carlos, um jovem apaixonado por aprender coisas novas,
            tecnologia, programação e algoritmos! Atualmente eu sou um estudante
            no Instituto Federal do Piauí.
          </Description>
        </Details>
        <SocialMedias>{renderSocialMedias()}</SocialMedias>
      </AboutMe>

      <Projects loading={loading}>
        {loading ? <Loader /> : renderProjects()}
      </Projects>
    </Container>
  );
};

export default Home;
