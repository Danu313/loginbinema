import React from 'react'
import Login from './Login'

export default function page() {
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
    <Login />
    </div>
  )
}
