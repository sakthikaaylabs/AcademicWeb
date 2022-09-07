import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Components/Home';
import User from './Components/User';
import './App.css';
import SideBar from './shared/Sidebar';
import Contacts from './Components/Contacts';
import { positions } from '@mui/system';
import Page404 from "./shared/ErrorPage"

function App() {
  return (
    <div id="outer-container">      
<BrowserRouter>
<div id="sidebar">
<SideBar/>
</div>

<div id="content">
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/user' element={<User/>}/>
  <Route path="/sidebar" element={<SideBar/>}/>
  <Route path="/contact" element={<Contacts/>}/>
  <Route path="/*" element={<Page404/>}/>
</Routes>
</div>
</BrowserRouter>
    </div>
  );
}

export default App;
