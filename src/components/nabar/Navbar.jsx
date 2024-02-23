// components/Navbar.jsi
"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  IconButton,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import styles from "./navbar.module.css";
import Navlink from "./Navlink/Navlink";

const drawerWidth = 200;

const navbarStyle = {
  boxShadow: "none",
  backgroundColor: " transparent",
  padding: "20px 0px",
};

const listStyle = {
  width: drawerWidth,
  backgroundColor: "#9BA3EF",
  boxSizing: "border-box",
  marginTop: "50px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const textStyle={
  color: 'black', 
  fontSize: '24px', 
  fontWeight:'bold',
  fontFamily:'Lexend',
}

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <CssBaseline />
      <AppBar position="static" style={navbarStyle} elevation={0}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            className={styles.logo}
            component="div"
            sx={{ flexGrow: 1, display: "block" }}
          >
            <Link href="/">
              <div>
                {" "}
                <span>CODE OPTIX</span>
              </div>
              <div>
                {" "}
                <span>SOLUTION</span>
              </div>
            </Link>
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Navlink />
          </Box>

          {/* for smaller screens */}
          <IconButton
            onClick={() => setOpenDrawer(!openDrawer)}
            color="inherit"
            edge="end"
            sx={{ display: { xs: "block", md: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="temporary"
            anchor="right"
            open={openDrawer}
            ModalProps={{
              keepMounted: true,
            }}
            onClose={() => setOpenDrawer(false)}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "#9BA3EF",
                transition: "background-color 0.3s ease",
                height: "400px",
              },
            }}
          >
            <List style={listStyle}>
              <Link href="/about">
                <ListItemButton>
                  <ListItemIcon>
                    <ListItemText style={textStyle}>
                      About
                    </ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              </Link>

              <Link href="/contact" >
                <ListItemButton>
                  <ListItemIcon>
                    <ListItemText style={textStyle}>Contact</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              </Link>

              <Link href="/projects" >
                <ListItemButton>
                  <ListItemIcon>
                    <ListItemText style={textStyle}>Projects</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              </Link>

              <Link href="/services" >
                <ListItemButton>
                  <ListItemIcon>
                    <ListItemText style={textStyle}>Services</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              </Link>

              <Link href="#">
                <ListItemButton className={styles.mobileButton}>
                  Let's Connect
                </ListItemButton>
              </Link>
            </List>
          </Drawer>
          
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
