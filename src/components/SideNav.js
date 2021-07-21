import React from 'react';
import { Box } from '@material-ui/core';
import { ReactComponent as Logo } from '../logo.svg';

import { SideNavWrapper, SideNavOptions, SideNavOption } from '../styles/sideNav';

const SideNav = () => {
  return (
    <SideNavWrapper>
      <Box display="flex" justifyContent="center" py={5} >
        <Logo />
      </Box>
      <SideNavOptions>
        <SideNavOption to="/">Home</SideNavOption>
        <SideNavOption to="/workOrders">Work Orders</SideNavOption>
      </SideNavOptions>
    </SideNavWrapper>
  );
};

export default SideNav;