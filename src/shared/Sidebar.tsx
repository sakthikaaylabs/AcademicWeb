
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemText,
} from "@material-ui/core";
import './sidebar.css'
import { useNavigate, useLocation } from 'react-router-dom'
import DomainIcon from '@mui/icons-material/Domain';
import PeopleIcon from '@mui/icons-material/People';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InfoIcon from '@mui/icons-material/Info';

const Sidebar = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const itemsList = [
    {
      text: "Home",
      Icon: <DomainIcon />,
      selected:"",
      onclick: () => {
        navigate("/", { state: pathname })
      }
    },
    {
      text: "User",
      Icon: <PeopleIcon />,
      selected:"user",
      onclick: () => {
        navigate("/user", { state: pathname })
      }
    },
    {
      text: "Contact",
      Icon: <ContactPageIcon />,
      selected:"contact",
      onclick: () => {
        navigate("/contact", { state: pathname })
      }

    },
    {
      text: "About",
      Icon: <InfoIcon />,
      selected:"about",
      onclick: () => {
        navigate("/about", { state: pathname })
      }

    }
  ];
  return (
    <MUIDrawer variant="permanent" >
      <List>
        {itemsList.map((item, index) => {
          const { text, Icon, onclick,selected } = item;
          const path=pathname.split("/")[1]
          const focus = path === selected ? true : false
          return (
            <ListItem button selected={focus} onClick={onclick}>
              {Icon}&nbsp;<ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default Sidebar;
