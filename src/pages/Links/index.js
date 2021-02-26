import React from 'react';

import Profile from '../../components/Profile';
import Linker from '../../components/Linker';

import { Wrapper, Container, LinkersContainer } from './styles';

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
  { title: 'Discord', url: 'https://discord.com/channels/@me/carlos3g#0956' },
  { title: 'Telegram', url: 'https://t.me/c4rlos3g' },
];

function Links() {
  return (
    <Wrapper>
      <Container>
        <Profile user={user} />

        <LinkersContainer>
          {items.map((item) => (
            <Linker data={item} />
          ))}
        </LinkersContainer>
      </Container>
    </Wrapper>
  );
}

export default Links;
