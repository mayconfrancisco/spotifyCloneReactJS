import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input type="text" placeholder="Search" />
    </Search>

    <User>
      <img
        src="https://avatars0.githubusercontent.com/u/21954169?v=4"
        alt="Foto do usuário logado"
      />
      Maycon Francisco
    </User>
  </Container>
);

export default Header;
