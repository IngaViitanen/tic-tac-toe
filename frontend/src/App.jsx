import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { StreamChat } from "stream-chat"
import Cookies from "universal-cookie"

function App() {
  const api_key = import.meta.env.VITE_API_KEY
  const cookies = new Cookies()
  const token = cookies.get("token")
  const client = StreamChat.getInstance(api_key)

  if(token) {
    client.connectUser({
      id: cookies.get("userId"),
      name: cookies.get("username"),
      firstName: cookies.get("firstName"),
      lastName: cookies.get("lastName"),
      hashedPass: cookies.get("hashedPass"),
    },
    token 
    ).then((user) => {
      console.log(user)
    })
  }

  return (
    <>
      <SignUp />
      <Login />
    </>
  )
}

export default App
