// import { Card } from "@mui/material";
import React from "react";
import '../.././Styles/sideBar.css'
import { BiHomeAlt } from 'react-icons/bi';
import { AiFillMessage } from 'react-icons/ai'
import { HiOutlineUserGroup } from 'react-icons/hi';
import { VscBell } from 'react-icons/vsc';
import { IoCalendar } from 'react-icons/io5';
import { TbPuzzle } from 'react-icons/tb';
import { FaMagic } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-feeds"><span>Feeds</span>
        <BiHomeAlt />
        <HiOutlineUserGroup /></div>
      <div className="sidebar-explore"><span>Explore</span><FaMagic /><TbPuzzle /><IoCalendar /></div>
      <div className="sidebar-pages"><span>Pages</span><AiFillMessage /><VscBell /></div>
    </div>
  )
}