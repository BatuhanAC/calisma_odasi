import React from 'react'

const Input = ({placeholder, type, submit}) => {
  return (
    <>
     <input className='border-2 border-red-300 rounded-lg p-2 m-2' placeholder={placeholder} type={type} />
    </>
  )
}

export default Input