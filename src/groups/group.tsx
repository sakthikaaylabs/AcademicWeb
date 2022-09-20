import {
  Card,
  Typography,
  styled,
  InputBase,
  Button,
  Grid,
  Paper,
  CardMedia,
  CardActionArea,
  CardActions,
  CardContent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import Header from "../shared/Header/header";
import Sidebar from "../shared/Sidebar/sideBar";
import "../Styles/group.css";
import { FiFilter } from "react-icons/fi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { red } from "@mui/material/colors";
const coverimg = require("../shared/assets/comingsoon.jpg");

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "50px",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "white",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Group = () => {
  return (
    <div className="group-page-container">
      <Header />
      <Sidebar />
      <div className="group-page">
        <Card className="group-header">
          <Typography variant="h5">Group</Typography>
          <div className="group-header-search">
            <Search sx={{ backgroundColor: "#f5f5f5" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <FiFilter />
          </div>
        </Card>
        {/* <div className="group-body">
          <Card className="group-details">
            <img
              src={coverimg}
              className="group-page-coverimg"
              alt="coverimg"
            />
            <div className="group-page-userimg-container">
              <img
                src={coverimg}
                className="group-page-userimg"
                alt="userimg"
              />
            </div>
            <Card className="group-name-card">
              <div className="group-name-details">
              <Typography variant="h5" sx={{ ml: -10 }}>
                Group Name
              </Typography>
              <Typography variant="h6" sx={{ ml: -20 }}>
                Email
              </Typography>
              </div>
              <div className="group-media"><AiOutlineVideoCamera className="group-media-icon" />
              <Button variant="contained" sx={{borderRadius:5}}>Follow</Button>
              </div>
            </Card>
          </Card>
        </div> */}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 745, maxHeight:300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="120"
                  image={coverimg}
                  alt="green iguana"
                />
                <div className="group-page-userimg-container">
                  <img
                    src={coverimg}
                    className="group-page-userimg"
                    alt="userimg"
                  />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Group Name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    EmailName
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Item>2</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>3</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>4</Item>
          </Grid>
        </Grid>
        <Card className="group-footer">3</Card>
      </div>
    </div>
  );
};

export default Group;
