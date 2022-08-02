import React, { useEffect, useState } from 'react'
import Button from "../micros/Button";
import Input from "../micros/Input";
import Option from '../micros/Option';
import Select from '../micros/Select';
import { db } from '../../firebase-config';
import { doc, updateDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const Account = () => {
  const [name, setName] = useState()
  const [surname, setSurname] = useState()
  const [username, setUsername] = useState()
  const [job, setJob] = useState()
  const [education, setEducation] = useState()
  const [birthday, setBirthday] = useState()
  const email = useSelector(state => state.auth.user)
  const data = useSelector(state => state.account.data)

  const save = async () => {
      await updateDoc(doc(db, "users", `${email}`), {
        name: name,
        surname: surname,
        username: username,
        job: job,
        education: education,
        birthday: birthday
      })
      toast.success('Saved')
    }
  
  useEffect(() => {
    setName(data.name)
    setSurname(data.surname)
    setUsername(data.username)
    setJob(data.job)
    setEducation(data.education)
    setBirthday(data.birthday)
  }, [data])

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <form className='grid grid-flow-row  w-[35%] grid-cols-2 justify-center p-[5%] gap-[12%] '>
          <div className='flex flex-col'>
            <label className='font-semibold'>Name:</label>
            <Input placeholder={data.name} setState={setName} />
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold'>Job:</label>
            <Select setState={setJob} selected={data.job} >
                <Option value="">Choose...</Option>
                <Option value="Computer Engineer">Computer Engineer</Option>
                <Option value="Human Resources Manager">Human Resources Manager</Option>
                <Option value=">Art Director">Art Director</Option>
                <Option value="3D Artist">3D Artist</Option>
                <Option value="Content Creater">Content Creater</Option>
            </Select>
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold'>Surname:</label>
            <Input placeholder={data.surname} setState={setSurname}/>
          </div>
          <div className='flex flex-col'>
          <label className='font-semibold'>Education:</label>
            <Select setState={setEducation} selected={data.education}  >
                <Option value="">Choose...</Option>
                <Option value="Elementary School">Elementary School</Option>
                <Option value="High School">High School</Option>
                <Option value="Undergraduate">Undergraduate</Option>
                <Option value="Postgraduate">Postgraduate</Option>
                <Option value="Doctorate">Doctorate</Option>
            </Select>
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold'>Username:</label>
            <Input placeholder={data.username} setState={setUsername}/>
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold'>Birthday:</label>
            <div className='' ></div>
          </div>
        </form>
        <div className='w-[15%] flex justify-center'>
          <Button handleOnClick={save} >Save</Button>
        </div>
      </div>
    </>
  )
}

export default Account