import { useEffect, useState } from 'react';
import axios from '../../services/api';
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

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let projects = [];

      for (const pN of projectNames) {
        const project = (await axios.get(`/repos/${pN}`)).data;
        const techs = Object.keys(
          (await axios.get(`/repos/${pN}/languages`)).data
        );
        projects.push({ ...project, techs });
      }

      setProjects(projects);
      setLoading(false);
    })();
  }, []);

  const renderProjects = () =>
    projects.map((p, i) => <Project data={p} key={i} />);

  const renderSocialMedias = () =>
    socialMedias.map((s, i) => (
      <IconWrapper href={s.url} key={i}>
        {s.icon}
      </IconWrapper>
    ));

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
            tecnologia, programação e algoritmos! atualmente eu sou um estudante
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
