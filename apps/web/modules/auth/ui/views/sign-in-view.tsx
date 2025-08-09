import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInView = () => {
    return (
        <SignIn routing='hash' />
    )
}

export default SignInView