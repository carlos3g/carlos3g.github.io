import React from 'react';

import { Button, Container, LinkIcon } from './styles';

function Linker({ title, href }) {
  return (
    <Container>
      <Button href={href}>
        {title}
        <LinkIcon />
      </Button>
    </Container>
  );
}

export default Linker;
