import React from 'react'

const WelcomeText = () => {
  return (
    <>
    <div className='center'>
    <h1 class=" mainText white">Unlimited movies, TV shows and more.</h1>
    <h2 className='white'> Watch anywhere. Cancel anytime.</h2>
    <h3 className='white'> Ready to watch? Enter your email to create or restart your membership..</h3>
    <div>
        <input type="text" className='email-input'></input>
        <button className='start-button'  >Get Started</button>
    </div>
    </div>
    </>
  )
}

export default WelcomeText