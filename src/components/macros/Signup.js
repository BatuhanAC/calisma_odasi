import React from 'react'
import Input from '../micros/Input'

const Signup = () => {
  return (
    <>
      <form className='flex flex-col w-[15%]'>
        <Input placeholder='E-mail' type='email' />
        <Input placeholder='Şifre' type='password' />
        <Input placeholder='Şifrenizi Onaylayın' type='password' />
      </form>
    </>
  )
}

export default Signup