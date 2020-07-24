import React from 'react';

import { Grid } from './styles';
import Logo from '../Logo';
import SideBar from '../SideBar';

const Layout: React.FC = () => {
  return (
    <Grid>
      <SideBar />
    </Grid>
  )
}

export default Layout;