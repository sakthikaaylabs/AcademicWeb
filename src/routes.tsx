import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard/dashboard';
import Account from './Account/account';
import Academy from './academy/academy';
import Create from './create/create';
import Group from './groups/group';
import Profile from './Profile/profile';
import Report from './reports/report';
// import Notfound from './shared/404notfount/notfound'
// import Header from "./shared/Header/header";
// import Sidebar from './shared/Sidebar/sideBar';
import ComingSoon from "./shared/ComingSoon/comingSoon";

const Routers = () => {
    return (
        <div style={{width:'100vw'}}>
            <BrowserRouter>
                {/* <Sidebar/> */}
                <div style={{ textAlign: "center" }}>
                    <Routes>
                        <Route path='/home' element={<Dashboard />} />
                        <Route path='/account' element={<Account />} />
                        <Route path="/academy" element={<Academy />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/report" element={<Report />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/group" element={<Group />} />
                        <Route path='/comingsoon' element={<ComingSoon />}/>
                        <Route path='/Coming' element={<ComingSoon/>} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Routers
