import React from 'react';

import { Container, Avatar, Name, Description, Details } from './styles';

function Profile({user}) {
  return (
    <Container>
      <Avatar src={user.avatar} alt={user.name} />
      <Details>
        <Name>{user.name}</Name>
        <Description>{user.description}</Description>
      </Details>
    </Container>
  );
}

export default Profile;
