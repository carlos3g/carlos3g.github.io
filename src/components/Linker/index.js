import React from 'react';

import { Linker, LinkerContainer } from './styles';

function Links({ data }) {
  return (
    <LinkerContainer>
      <Linker href={data.url}>{data.title}</Linker>
    </LinkerContainer>
  );
}

export default Links;
