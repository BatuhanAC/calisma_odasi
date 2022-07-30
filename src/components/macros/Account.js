import React from 'react'
import Button from "../micros/Button";
import { logout } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate()

  const SignOut = async () => {
    await logout()
    navigate("/", {replace: true})
  }

  return (
    <>
      <div className='w-[10%] mt-12'>
        <Button handleOnClick={SignOut}>SignOut</Button>
      </div>
    </>
  )
}

export default Account