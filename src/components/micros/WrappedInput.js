import React from 'react'

const WrappedInput = ({placeholder, setState, type}) => {
  return (
    <div className='mt-[10%]'>
    <input type={type} placeholder={placeholder}  onChange={(e) => {setState(e.target.value)}} 
      className = "border-2 p-3 border-blue-200 focus:border-blue-600 outline-none  rounded-2xl "
    />
    </div>
  )
}

export default WrappedInput