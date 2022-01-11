import { Button, Container, LinkIcon } from './styles';

const Linker = ({ title, href }) => (
  <Container>
    <Button href={href}>
      {title}
      <LinkIcon />
    </Button>
  </Container>
);

export default Linker;
