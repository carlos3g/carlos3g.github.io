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
];

function Links() {
  return (
    <Container>
      <Profile user={user} />

      <LinkersContainer>
        {items.map((item, index) => (
          <Linker data={item} key={index} />
        ))}
      </LinkersContainer>
    </Container>
  );
}

export default Links;
