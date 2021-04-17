import React from 'react';

import { Linker, LinkerContainer, LinkIcon } from './styles';

function Links({ data }) {
  return (
    <LinkerContainer>
      <Linker href={data.url}>
        {data.title}
        <LinkIcon />
      </Linker>
    </LinkerContainer>
  );
}

export default Links;
