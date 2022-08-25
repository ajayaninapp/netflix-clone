import React from "react";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Rowposts from "../components/rowposts";
import { Container, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { API_KEY, imageUrl } from "../Constants/constants";
import { action, trending, comedyMovies, originals } from "../Constants/urls";
import { getMovie } from "../Services/apiCalls";


const HomePage = () => {
  const [movie, setMovie] = useState();
  
  

  useEffect(() => {
    getMovie().then((response) => {
      setMovie(response);
    });
  }, []);
  return (
    <>
      <div style={{ background: "black" }}>
        <Box
          className="bg_img2 black"
          sx={{
            backgroundSize: "cover !important",
            backgroundRepeat: "no-repeat",
            background: `linear-gradient(to right, rgba(0,0,0,.99) 0,transparent 60%,rgba(0,0,0,.99)),  rgba(0,0,0,.99)
        url(${movie ? imageUrl + movie.backdrop_path : ""})`,
          }}
        >
          <div className="nav">
            <Navbar />
          </div>
          <div className="banner">
            <Banner movie={movie ? movie : ""} />
          </div>
        </Box>

        <Rowposts url={originals} genre="originals" />
        <Rowposts url={trending} genre="Trending now" />
        <Rowposts url={comedyMovies} genre="Comedy" />
        <Rowposts url={action} genre="Action" />
      </div>
    </>
  );
};

export default HomePage;
