import { memo, FC } from 'react';
import { Content, Wrapper, LinkIcon } from './styles';

interface AnchorProps {
  title: string;
  href: string;
}

const Anchor: FC<AnchorProps> = ({ title, href }) => (
  <Wrapper href={href}>
    <Content>
      <div />
      {title}
      <LinkIcon />
    </Content>
  </Wrapper>
);

export default memo(Anchor);
