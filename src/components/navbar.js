import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { Typography, Toolbar, MenuItem,Menu } from "@mui/material";
import Button from "@mui/material/Button";
import netflixLogo from "../Assets/netflix-logo-png-2569.png";
import { useLocation, Link } from "react-router-dom";
import { FaSistrix, FaUser } from "react-icons/fa";
import { useUserContext } from "../Context/UserContext";

const Navbar = () => {
  const location = useLocation();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [navflex, setNavflex] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const {logOut}=useUserContext();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 

  const pages = ["Home", "TV", "Movies", "MyList"];

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname == "/") {
      setIsSignIn(true);
      console.log(isSignUp);
      setIsSignUp(false);
      setIsLoggedIn(false);
      setNavflex(1);
    }
    debugger;
    if (location.pathname.includes("/signup")) {
      setIsSignIn(false);
      console.log(isSignIn);
      setIsSignUp(true);
      setIsLoggedIn(false);
      setNavflex(1);
    }
    if (location.pathname.includes("/home")) {
      setIsSignIn(false);
      console.log(isSignIn);
      setIsSignUp(false);
      setIsLoggedIn(true);
      setNavflex(0);
    }
  });

  return (
    <Box sx={{ flexGrow: 1, border: "none" }}>
      <AppBar
        position="static"
        sx={{
          background: "transparent",
          color: "black",
          border: "none",
          alignItems: "right",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: navflex }}>
            <img src={netflixLogo} className="netflix_logo"></img>
          </Typography>
          <div className={isLoggedIn ? "show" : "hidden"}>
            <Box
              sx={{
                flexGrow: 1,
                alignItems: "center",
                textAlign: "justify",
                fontSize: 20,
                paddingLeft: 10,
                minWidth:'50vw'
              }}
              display={{xs:'none',sm:'none',md:'flex',lg:'flex'}}
            >
              {pages.map((page) => (
                <Link to={`/${page}`} key={page} className="white menu-items">
                 <Typography sx={{flexWrap:'nowrap'}}>{page}</Typography> 
                </Link>
              ))}
              <Box sx={{ marginLeft:'40vw', color: "white" }} display={{xs:'none',sm:'none',md:'none',lg:'flex'}}>
                <MenuItem>
                  <FaSistrix />
                </MenuItem>
                <MenuItem>
                  <Typography>User</Typography>
                </MenuItem>
                <MenuItem
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <FaUser />
                </MenuItem>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={()=>logOut()}>Logout</MenuItem>
                </Menu>
              </Box>
            </Box>
          </div>

          <div className={isSignIn ? "show" : "hidden"}>
            <select className="langSelect">
              <option value="English">English</option>
              <option value="hindi">हिन्दी</option>
            </select>
            <Link to="/signin">
            <Button
              variant="outlined"
              sx={{
                flexGrow: 1,
                color: "white",
                background: "red",
                height: "35px",
                marginTop: "10px",
                fontSize: "12px",
                display: "block",
              }}
            >
              Sign In
            </Button>
            </Link>
          </div>

          <div className={isSignUp ? "show" : "hidden"}>
          <Link to="/signin">
          <Button
              sx={{
                color: "black",
                background: "transparent",
                height: "55px",
                width: "85px",
                marginTop: "10px",
                fontSize: "16px",
                fontWeight: "800px",
              }}
            >
              Sign IN
            </Button>
            
          </Link>
            
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
