import React from 'react'
import NavButton from '../micros/NavButton'

const Header = () => {

  return (
    <div className='flex p-5'>
        <NavButton link={"/"}>Main</NavButton>
        <NavButton link={"Session"}>Session</NavButton>
        <NavButton link={"Account"}>Account</NavButton>
        <NavButton link={"Login"}>Login</NavButton>
        <NavButton link={"Signup"}>Signup</NavButton>
    </div>
  )
}

export default Header