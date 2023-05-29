'use client'

import { signIn } from "next-auth/react"
import { FC, useState } from "react"
import Button from "./shared/Button"
import { toast } from './shared/toast'

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
    const [ isLoding, setIsLoding ] = useState<boolean>(false)

    const signInWithGoogle = async () => {
        setIsLoding(true)

        try{
            await signIn('google', { callbackUrl: '/' })
        }catch(error){
            toast({
                title: "Error signing in",
                message: 'Please try again later.',
                type: 'error'
            })
        }
    }
    return(
        <Button onClick={signInWithGoogle} isLoding={isLoding}>sign in</Button>
    )
}

export default SignInButton