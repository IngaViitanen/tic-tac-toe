import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const login = () => {}

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