import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useState } from 'react'

const WelcomeText = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('')
  console.log(email);
  return (
    <>
    <div className='center'>
    <h1 class=" mainText white">Unlimited movies, TV shows and more.</h1>
    <h2 className='white'> Watch anywhere. Cancel anytime.</h2>
    <h3 className='white'> Ready to watch? Enter your email to create or restart your membership..</h3>
    <div>
        <input type="text" className='email-input' onChange={(e)=>setEmail(e.target.value)}></input>
        
        <button className='start-button' onClick={()=>navigate("/signup",{state:email})}>Get Started</button>
     
    </div>
    </div>
    </>
  )
}

export default WelcomeText