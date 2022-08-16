import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import {Typography,Toolbar} from '@mui/material'
import Button from "@mui/material/Button";
import netflixLogo from "../Assets/netflix-logo-png-2569.png";


const Navbar = () => {
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
          <select className="langSelect">
            <option value="English">English</option>
            <option value="hindi">हिन्दी</option>
          </select>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              background: "red",
              height: "35px",
              marginTop: "10px",
              fontSize: "12px",
            }}
          >
            Sign In
          </Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
