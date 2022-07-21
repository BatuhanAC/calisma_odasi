import React from 'react'
import {useNavigate} from 'react-router-dom'

const NavButton = ({link, children}) => {
  const navigate = useNavigate()

  return (
    <>
    <button className='bg-gray-400 m-5 rounded-lg p-2' onClick={() => navigate(link)}>{children}</button>
    </>
  )
}

export default NavButton