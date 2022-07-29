import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Session = () => {
  const navigate = useNavigate()
  const {state} = useLocation()
  const room = state.room
  return (
    <div className='flex flex-col h-screen'>
      <div className='text-2xl text-center p-1 text-white bg-blue-600'>{room.name}</div>
      <div className='flex-1 flex'>
        <div className='basis-1/12 bg-blue-300 text-center'>ONLINE USERS {room.auth.online_users.map((user, index) => {return (
            <li key={index}>{user}</li>
        )})}</div>
        <div className='basis-11/12 flex flex-col bg-blue-100 '>
          <div className='basis-11/12'>Chat</div>
          <div className='basis-1/12 bg-blue-200'>Comment</div>
        </div>
      </div>
      <button className='absolute right-[2%] top-[0.5%] p-1 bg-blue-900 text-white'
      onClick={() => {navigate('/')}}>
      Çıkış
      </button>
    </div>
  )
}

export default Session