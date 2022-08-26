import React from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import {Toolbar} from "@mui/material";
import {Typography} from '@mui/material';
import Button from "@mui/material/Button";
import netflixLogo from "../Assets/netflix-logo-png-2569.png";

const NavbarLight = () => {
  return (
   
        <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ background: "transparent", color: "black" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={netflixLogo} className="netflix_logo"></img>
          </Typography>
          
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavbarLight