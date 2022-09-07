import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import User from './Components/User';
import './App.css';
import SideBar from './shared/Sidebar';
import Contacts from './Components/Contacts';
import { positions } from '@mui/system';
import Page404 from "./shared/ErrorPage"
import RouteWithSB from './shared/RouteWithSB'

function App() {
  return (
    <div id="outer-container">
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<RouteWithSB Component={Home} />} />
          <Route path='/user' element={<RouteWithSB Component={User} />} />
          {/* <Route path="/sidebar" element={<RouteWithSB Component={Contact}/>}/> */}
          <Route path="/contact" element={<RouteWithSB Component={Contacts} />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
