import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Components/Home';
import User from './Components/User';
import './App.css';
import SideBar from './shared/Sidebar';
import Contacts from './Components/Contacts';
import { positions } from '@mui/system';

function App() {
  return (
    <div className="App" style={{width:"100vw",height:"100vh",display:"flex",position:"relative"}}>      
<BrowserRouter>
<SideBar/>
<div style={{position:"absolute",width:"100%",height:"100%", marginLeft:"10rem"}}>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/user' element={<User/>}/>
  <Route path="/sidebar" element={<SideBar/>}/>
  <Route path="/contact" element={<Contacts/>}/>
</Routes>
</div>
</BrowserRouter>
    </div>
  );
}

export default App;
