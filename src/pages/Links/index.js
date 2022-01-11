import { Profile, Linker } from '../../components';
import { Container, Linkers } from './styles';

const user = {
  name: 'Carlos Mesquita',
  description: 'Software engineer',
  avatar: 'https://github.com/carlos3g.png',
};

const sites = [
  { title: 'Github', href: 'https://github.com/carlos3g' },
  { title: 'Instagram', href: 'https://www.instagram.com/c4rlos3g' },
  { title: 'Twitter', href: 'https://twitter.com/c4rlos3g' },
  { title: 'Linkedin', href: 'https://www.linkedin.com/in/carlos3g' },
  { title: 'Telegram', href: 'https://t.me/c4rlos3g' },
  { title: 'Codepen', href: 'https://codepen.io/carlos3g' },
  { title: 'Medium', href: '	https://medium.com/@carlos3g' },
];

const Links = () => {
  const renderLinkers = () =>
    sites.map((s, i) => <Linker href={s.href} title={s.title} key={i} />);

  return (
    <Container>
      <Profile user={user} />
      <Linkers>{renderLinkers()}</Linkers>
    </Container>
  );
};

export default Links;
