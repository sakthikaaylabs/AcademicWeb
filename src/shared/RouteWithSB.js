import React from 'react'

import SideBar from './Sidebar'


const RouteWithSB = ({ Component }) => {
  return <><div id='sidebar'><SideBar /></div><div id="content"><Component /></div></>
}
export default RouteWithSB

