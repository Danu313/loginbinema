'use client'

import React, { useState } from 'react'
import Login from '../login/Login'
import Signup from '../signup/SignUp'

function AuthPage() {
    const [open, setOpen] = useState(false)

    const toggleAuth = () => {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <div>
            {open ? 
                <Login /> 
                : 
                <Signup />
            }
        </div>
    )
}

export default AuthPage
