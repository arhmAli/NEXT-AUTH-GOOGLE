"use client"
import React from "react";
import {signIn, signOut, useSession} from "next-auth/react"
const Login = () => {
    const {data:session}=useSession()
    if(session&&session.user){
        return(
            <div>
                <div>
                    <img src={session.user.image} alt={session.user.name}/>
                    <h1>{session.user.name}</h1>
                    <p>{session.user.email}</p>
                    <button onClick={()=>signOut()}>Signout</button>
                </div>
            </div>
        )
    }
    return (
        <div>
          <button onClick={()=>signIn()}>
            SigninButton</button>
        </div>
    )
   
}
export default Login;