import React, { useState } from 'react'
import Axios from 'axios'
import Cookies from "universal-cookie"

const SignUp = ({setIsAuth}) => {
    const [user, setUser] = useState()

    const signUp = (e) => {
      e.preventDefault()
      const cookies = new Cookies()
      Axios.post("http://localhost:4000/signup", user).then(res => {
        const {token, userId, firstName, lastName, username, password, hashedPass} = res.data

        cookies.set("token", token)
        cookies.set("userId", userId)
        cookies.set("firstName", firstName)
        cookies.set("lastName", lastName)
        cookies.set("username", username)
        cookies.set("password", password)
        cookies.set("hashedPass", hashedPass)
        setIsAuth(true)
      })
    }

  return (
    <>
    <form onSubmit={signUp}>
        <label>Sign up</label>
        <input type="text" placeholder='First Name' onChange={(e) => {
            setUser({ ...user, firstName: e.target.value })
        }}/>
         <input type="text" placeholder='Last Name' onChange={(e) => {
            setUser({ ...user, lastName: e.target.value })
        }}/>
         <input type="text" placeholder='Username' onChange={(e) => {
            setUser({ ...user, username: e.target.value })
        }}/>
         <input type="password" placeholder='Password' onChange={(e) => {
            setUser({ ...user, password: e.target.value })
        }}/>
        <button type='submit'>Register</button>
    </form>
    </>
  )
}

export default SignUp