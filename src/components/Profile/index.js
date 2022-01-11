import { Container, Avatar, Name, Description, Details } from './styles';

const Profile = ({ user }) => (
  <Container>
    <Avatar src={user.avatar} alt={user.name} />
    <Details>
      <Name>{user.name}</Name>
      <Description>{user.description}</Description>
    </Details>
  </Container>
);

export default Profile;
