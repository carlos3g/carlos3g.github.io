import { memo } from 'react';
import { Content, Wrapper, LinkIcon } from './styles';

const Linker = ({ title, href }) => (
  <Wrapper href={href}>
    <Content>
      <div />
      {title}
      <LinkIcon />
    </Content>
  </Wrapper>
);

export default memo(Linker);
