import React from 'react'
import SignInCard from '../components/signInCard'
import SignUpCard from '../components/signUpCard'
import HomePage from '../Pages/HomePage'
import LandingPage from '../Pages/LandingPage'
import SignUpPage from '../Pages/SignUpPage'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignInPage from '../Pages/SignInPage'

const RouterContainer = () => {
  return (
    <div>
         <BrowserRouter>
      <Routes>
      
        <>        
          <Route path="/" element={<LandingPage/>} />
            <Route path="/signin" element={<SignInPage/>}/>
          

          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/home" element={<HomePage/>} /> 
                  
        </>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default RouterContainer