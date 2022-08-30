import React from 'react'
import HomePage from '../Pages/HomePage'
import LandingPage from '../Pages/LandingPage'
import SignUpPage from '../Pages/SignUpPage'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignInPage from '../Pages/SignInPage'
import { routes } from "./routes";
import { useUserContext } from '../Context/UserContext'

const RouterContainer = () => {
  const { isLoggedIn } = useUserContext();
  const rootUrl = (isLoggedIn ?(routes.home):(routes.landing))
  return (
    <div>
         <BrowserRouter>
         <Routes>
        {isLoggedIn ? (
          <>
          <Route path={routes.home} element={<HomePage />} />
          
        </>
          
        ) : (
          
          <>
          <Route path="/" element={<LandingPage />} />
          <Route path={routes.signup} element={<SignUpPage />} />
          <Route path={routes.signin} element={<SignInPage />} />
        </>
        )}
        <Route path="*" element={<Navigate to={rootUrl} />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default RouterContainer