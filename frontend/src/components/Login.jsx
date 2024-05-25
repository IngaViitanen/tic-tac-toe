import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import Axios from 'axios'

const Login = ({setIsAuth}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
   
    const login = (e) => {
      e.preventDefault()
      const cookies = new Cookies()
      Axios.post("http://localhost:4000/login", {
        username,
        password
      }).then(res => {
        const {token, userId, firstName, lastName, username} = res.data

        cookies.set("token", token)
        cookies.set("userId", userId)
        cookies.set("firstName", firstName)
        cookies.set("lastName", lastName)
        cookies.set("username", username)
        setIsAuth(true)
      })
    }

  return (
    <>
    <form onSubmit={login}>
        <label>Login</label>
         <input type="text" placeholder='Username' onChange={(e) => {
            setUsername(e.target.value)
        }}/>
         <input type="password" placeholder='Password' onChange={(e) => {
            setPassword(e.target.value)
        }}/>
        <button type='submit'>Login</button>
    </form>
    </>
  )
}

export default Login