import React from 'react'
import { useLocation } from 'react-router-dom'

const Session = () => {
  const {state} = useLocation()
  const room = state.room
  return (
    <div className='flex flex-col h-screen'>
      <div className='text-2xl text-center bg-slate-300'>{room.name}</div>
      <div className='flex-1 flex'>
        <div className='basis-1/12 bg-slate-200 text-center'>{room.auth.online_users.map((user, index) => {return (
            <li key={index}>{user}</li>
        )})}</div>
        <div className='basis-11/12 flex flex-col bg-white '>
          <div className='basis-11/12'>Chat</div>
          <div className='basis-1/12 bg-slate-100'>Comment</div>
        </div>
      </div>
    </div>
  )
}

export default Session