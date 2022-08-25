import React from "react";
import posters from "../Assets/poster.jpeg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as axios from 'axios'
import { API_KEY ,imageUrl} from "../Constants/constants";
import { useState,useEffect } from 'react';
import { Container } from "@mui/system";
import { getMovies } from "../Services/apiCalls";
const Rowposts = (props) => {
    const [movies,setMovies] = useState([])

    useEffect(() => {       
      getMovies(props.url).then((movies) => {
        setMovies(movies);
      })
        
      }, [])
  return (
    <Container sx={{background:'black',color:'white' ,paddingBottom:'10px'}}>
    <Typography variant="h5" sx={{marginTop:"10px",paddingTop:"20px"}}>{props.genre}</Typography>
      <div className="poster-row">
        {
        movies.map((movie)=>               
                <img src={`${movie ? imageUrl + movie.backdrop_path : ""}`} className="posters"></img>
        )}
        
      </div>
    </Container>
  );
};

export default Rowposts;
