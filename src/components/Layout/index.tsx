import React from 'react';

import { Grid } from './styles';
import Logo from '../Logo';
import Profile from '../Profile';

const Layout: React.FC = () => {
  return (
    <Grid>
      <Logo />
      <Profile profile={{name: 'Marcia Costa'}} />
    </Grid>
  )
}

export default Layout;