import React from 'react'
import Navbar from '../components/navbar'
import SignInCard from '../components/signInCard'

const SignInPage = () => {
  return (
   <>
   <div className="bg_img black">
       
       <div className="nav">
          <Navbar />
        </div>
        <div className="banner">
          <SignInCard/>
          
        </div>
      
      </div>
   </>
  )
}

export default SignInPage