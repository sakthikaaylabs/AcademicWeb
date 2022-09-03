import React, { useState } from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import './sidebar.css'
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [selected, setselected] = useState("Home")
  const navigate = useNavigate()
  const itemsList = [
    {
      text: "Home",      
      onclick: () => {
        setselected("Home")
        navigate("/")}
    },
    {
      text: "User",
      onclick: () => {
        setselected("User")
        navigate("/user")}
    },
    {
      text: "Contact",
      onclick: () => {
        setselected("Contact")
        navigate("/contact")
      }

    }
  ];
  return (
    <MUIDrawer variant="permanent" >
      <List>
        {itemsList.map((item, index) => {
          const { text, onclick } = item;
          const focus = selected === text ? true : false
          return (
            <ListItem button selected={focus} onClick={onclick}>
              <ListItemText primary={text}/>
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default Sidebar;
