import { FC } from 'react';

import { Anchor, Profile } from './components';
import { getStaticData } from '../../data';
import { Container, Anchors } from './styles';

const { socialMedias, user } = getStaticData();

const Links: FC = () => (
  <Container>
    <Profile user={user} />

    <Anchors>
      {socialMedias.map((s) => (
        <Anchor href={s.url} title={s.title} key={s.url} />
      ))}
    </Anchors>
  </Container>
);

export default Links;
