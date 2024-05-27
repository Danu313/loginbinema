import React from 'react'
import Signup from './SignUp'

function page() {
  return (
    <div 
    className='w-screen h-screen'
    style={
      {
        backgroundImage: 'url(https://cineverse.id/wp-content/uploads/2023/12/kungfu-panda.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }
    }
    >

    <Signup />
    </div>
  )
}

export default page