import React from 'react';

import { Profile, Linker } from '../../components';

import { Container, LinkersContainer } from './styles';

const user = {
  name: 'Carlos Mesquita',
  description: 'Frontend Engineer',
  avatar: 'https://github.com/carlos3g.png',
};

const items = [
  { title: 'Github', url: 'https://github.com/carlos3g' },
  { title: 'Instagram', url: 'https://www.instagram.com/c4rlos3g' },
  { title: 'Twitter', url: 'https://twitter.com/c4rlos3g' },
  { title: 'Linkedin', url: 'https://www.linkedin.com/in/carlos3g' },
  { title: 'Telegram', url: 'https://t.me/c4rlos3g' },
  { title: 'Codepen', url: 'https://codepen.io/carlos3g' },
  { title: 'Medium', url: '	https://medium.com/@carlos3g' },
];

function Links() {
  const renderLinkers = () =>
    items.map((item, index) => <Linker data={item} key={index} />);

  return (
    <Container>
      <Profile user={user} />

      <LinkersContainer>{renderLinkers()}</LinkersContainer>
    </Container>
  );
}

export default Links;
