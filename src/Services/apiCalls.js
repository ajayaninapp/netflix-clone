import * as axios from "axios";
import { API_KEY, imageUrl } from "../Constants/constants"; 
import { useState } from "react";


export const getMovie = () => {
   return axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        return response.data.results[1];

      })
      .catch(err=>{
        alert('network error')
    });

}

export const getMovies =(url) =>{
    return  axios.get(url).then((response)=>{
            
        console.log(response.data)
        debugger
        return response.data.results;
        
      }).catch(err=>{
          alert('network error')
      })
      
    }
