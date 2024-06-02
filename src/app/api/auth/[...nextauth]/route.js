import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import axios from "axios";

const handler=NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID??"",
            clientSecret:process.env.GOOGLE_CLIENT_SECRET??""
        }),   
  CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Credentials',
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: { label: "Username", type: "text" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {

        const res=axios.post('http://localhost:5000/users',credentials)  
        
        
      // If no error and we have user data, return it
      if (res.data && res.data.username) {
        return user.data.username
      }
      // Return null if user data could not be retrieved
      return null
    }
  })

    ],
    // pages:{
    //     signIn:"/auth/signin",
    //     signOut:"/auth/signout",
    //     error:"/auth/error",
    //     verifyRequest:"/auth/verify-request",
    //     newUser:"/auth/new-user"
    // },
    })
export{handler as GET,handler as POST}
