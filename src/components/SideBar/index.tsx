import React from "react";

import { Container } from "./styles";
import Logo from "../Logo";
import Profile from "../Profile";

const SideBar: React.FC = () => {
  return (
    <Container>
      <Logo />
      <Profile profile={{name: 'Marcia Costa'}} />
    </Container>
  );
};

export default SideBar;
