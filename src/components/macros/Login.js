import React from 'react'
import Input from '../micros/Input'

const Login = () => {

  return (
    <>
    <form className='flex flex-col w-[15%]'>
      <Input placeholder='E-mail' type='email' />
      <Input placeholder='Şifre' type='password' />
    </form>
    </>
  )
}

export default Login