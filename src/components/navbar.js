import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { Typography, Toolbar, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import netflixLogo from "../Assets/netflix-logo-png-2569.png";
import { useLocation, Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
const Navbar = () => {
  const location = useLocation();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [navflex,setNavflex]=useState(1)
  
  const pages = ["Home", "TV Shows", "Movies", "MyList"];

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname == "/") {
      setIsSignIn(true);
      console.log(isSignUp);
      setIsSignUp(false);
      setIsLoggedIn(false)
      setNavflex(1)
    }
    debugger;
    if (location.pathname.includes("/signup") ) {
      setIsSignIn(false);
      console.log(isSignIn);
      setIsSignUp(true);
      setIsLoggedIn(false)
      setNavflex(1)
      
    }
    if (location.pathname.includes("/home") ) {
      setIsSignIn(false);
      console.log(isSignIn);
      setIsSignUp(false);
      setIsLoggedIn(true)
      setNavflex(0)
      
    }
  });

  return (
    <Box sx={{ flexGrow: 1, border: "none" }}>
      <AppBar
        position="static"
        sx={{ background: "transparent", color: "black", border: "none",alignItems:"right" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow:navflex}} >
            <img src={netflixLogo} className="netflix_logo"></img>
          </Typography>
          <div  className={isLoggedIn? "show" : "hidden"}>
          <Box
            sx={{
              flexGrow: 1,
              alignItems: "center",
              textAlign: "justify",
              fontSize: 20,
              paddingLeft: 10,
             
            }}
          >
            {pages.map((page) => (
              <Link to={`/${page}`} key={page} className="white menu-items">
                {page}
              </Link>
            ))}
          </Box>

          </div>

          <div className={isSignIn ? "show" : "hidden"}>
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
                display: "block",
              }}
            >
              Sign In
            </Button>
          </div>

          <div className={isSignUp ? "show" : "hidden"}>
            <Button
              sx={{
                color: "black",
                background: "transparent",
                height: "55px",
                width:'85px',
                marginTop: "10px",
                fontSize: "16px",
                fontWeight: "800px",
              }}
            >
              Sign IN
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
