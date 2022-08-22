import { FC } from 'react';
import { Container, Avatar, Name, Description, Details } from './styles';

interface ProfileProps {
  user: {
    avatar: string;
    name: string;
    role: string;
  };
}

const Profile: FC<ProfileProps> = ({ user }) => (
  <Container>
    <Avatar src={user.avatar} alt={user.name} />
    <Details>
      <Name>{user.name}</Name>
      <Description>{user.role}</Description>
    </Details>
  </Container>
);

export default Profile;
