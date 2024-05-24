import React, { useState } from 'react'

const SignUp = () => {
    const [user, setUser] = useState()

    const signUp = () => {}

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