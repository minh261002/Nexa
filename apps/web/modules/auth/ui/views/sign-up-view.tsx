import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpView = () => {
    return (
        <SignUp routing='hash' />
    )
}

export default SignUpView