import { FC } from 'react';

import { Anchor, Profile } from './components';
import { getStaticData } from './data';
import { Container, Anchors } from './styles';

const { sites, user } = getStaticData();

const renderAnchors = () =>
  sites.map((s) => <Anchor href={s.href} title={s.title} key={s.href} />);

const Links: FC = () => (
  <Container>
    <Profile user={user} />
    <Anchors>{renderAnchors()}</Anchors>
  </Container>
);

export default Links;
