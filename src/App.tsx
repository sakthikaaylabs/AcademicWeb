import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import User from './Components/User';
import './App.css';
import {SideAppBar,DrawerHeader} from './shared/Sidebar'
import Box from '@mui/material/Box';
import Contacts from './Components/Contacts';
import Page404 from "./shared/ErrorPage"
import RouteWithSB from './shared/RouteWithSB'
import ComingSoon from './shared/ComingSoon';
import ForgotPassword from './Components/ForgotPassword';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <BrowserRouter>
{/* <SideAppBar/> */}
{/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}> */}
        <Routes>
          <Route path='/' element={<RouteWithSB Component= {Home}/>} />
          <Route path='/user' element={<RouteWithSB Component = {User}/> } />
          <Route path="/contact" element={<RouteWithSB Component={Contacts}/>} />
          <Route path='/forgot' element={<ForgotPassword/>}/>
          <Route path="/about" element={<ComingSoon/>}/>
          <Route path="/*" element={<Page404 />} />
        </Routes>
        {/* </Box> */}
      </BrowserRouter>
  </Box>
  );
}

export default App;
