'use client'

import { signOut } from "next-auth/react"
import { FC, useState } from "react"
import Button from "./shared/Button"
import { toast } from 'react-hot-toast'

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
    const [ isLoding, setIsLoding ] = useState<boolean>(false)

    const signOut = async () => {
        setIsLoding(true)

        try{
            await signOut()
        }catch(error){
            // toast({
            //     title: "Error signing out",
            //     text: 'Please try again later.',
            //     type: 'error'
            // })
        }
    }
    return(
        <Button onClick={signOut} isLoding={isLoding}>sign out</Button>
    )
}

export default SignOutButton