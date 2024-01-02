import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FaHome, FaHandHoldingMedical, FaInfoCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaUserShield, FaRegImages, FaUserCheck, FaShieldAlt, FaFileAlt   } from "react-icons/fa";
// import { signOut } from "firebase/auth";
// import { auth } from "../../config/firebaseConfig";


const drawerWidth = 240;

export default function SideBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: '#45f542', }}
      >
        <Toolbar>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          // width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Home">
              <ListItemIcon>
                <FaHome />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/About">
              <ListItemIcon>
                <FaUserShield />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Post">
              <ListItemIcon>
                <FaRegImages />
              </ListItemIcon>
              <ListItemText primary="Post" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/Request">
              <ListItemIcon>
                <FaUserCheck />
              </ListItemIcon>
              <ListItemText primary="Request" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/PrivacyAndPolicy">
              <ListItemIcon>
                <FaShieldAlt  />
              </ListItemIcon>
              <ListItemText primary="Privacy And Policy" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/TermsAndConditions">
              <ListItemIcon>
                <FaFileAlt  />
              </ListItemIcon>
              <ListItemText primary="Terms And Condition" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <FaHandHoldingMedical />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
