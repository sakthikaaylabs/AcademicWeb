import React from 'react'
import { Box } from '@mui/material'
import {SideAppBar,DrawerHeader} from './Sidebar'


const RouteWithSB = ({ Component }) => {
  return <><SideAppBar /><Box component="main" sx={{ flexGrow: 1, p: 3 }}><DrawerHeader/><Component /></Box></>
}
export default RouteWithSB

