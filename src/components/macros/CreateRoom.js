import React, { useState, useEffect } from "react";
import { AiOutlineDownCircle } from "react-icons/ai";
import { Link, Element } from "react-scroll";
import Button from "../micros/Button";
import { Header2XL } from "../micros/Header2XL";
import { Header4XL } from "../micros/Header4XL";
import Input from "../micros/Input";
import Option from "../micros/Option";
import Select from "../micros/Select";
import { SubmitButon } from "../micros/SubmitButon";
export const CreateRoom = () => {
  const [name, setName] = useState(null);
  const [lesson, setLesson] = useState(null);
  const [topic, setTopic] = useState(null);
  const [educationLevel, setEducationLevel] = useState(null);
  const [maxUser, setMaxUser] = useState(null);
  const [roomType, setRoomType] = useState(null);
  useEffect(() => {
    console.log("DATAS: ", {
      name,
      lesson,
      topic,
      educationLevel,
      maxUser,
      roomType,
    });
  }, [name, maxUser]);

  return (
    <>
      {/** Getting Room Name */}
      <div className='w-full h-screen bg-slate-100 flex flex-col items-center pt-48'>
        <div>
          <div className='flex flex-col items-center'>
            <Header4XL>First of all</Header4XL>
            <Header2XL>Lets choose a name for your room</Header2XL>
          </div>
          <div className='flex flex-col items-center justify-center mt-2'>
            <Input
              type='text'
              placeholder='write your room name'
              setState={setName}
            />
            <div className='mt-5'>
              <Link name='name' to='lessonAndTopic' smooth spy offset={-400}>
                <AiOutlineDownCircle
                  size={70}
                  className='text-blue-500 hover:text-blue-600 hover:cursor-pointer'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/** Getting Room Lesson and Topic */}
      <div className='w-full h-screen bg-slate-100 flex flex-col items-center pt-48 '>
        <div>
          <Header4XL>Can you tell us</Header4XL>
          <div className='flex flex-col items-center'>
            <Header2XL>Lesson</Header2XL>
            <Select id='lessons'>
              <Option selected>Choose a lesson</Option>
              <Option>Mobil Programlama</Option>
              <Option>Veri Bilimi</Option>
              <Option>Derleyici Tasarimi</Option>
              <Option>Algoritmalar</Option>
            </Select>
          </div>
          <div className='flex flex-col items-center mb-4'>
            <Header2XL>Topic</Header2XL>
            <Select id='topics'>
              <Option selected>Choose a topic</Option>
              <Option>Degiskenler</Option>
              <Option>Diziler</Option>
              <Option>Referanslar</Option>
              <Option>Objeler</Option>
            </Select>
          </div>
        </div>
        <Link
          name='lessonAndTopic'
          to='educationLevel'
          smooth
          spy
          offset={-400}
        >
          <AiOutlineDownCircle
            size={70}
            className='text-blue-500 hover:text-blue-600 hover:cursor-pointer'
          />
        </Link>
      </div>
      {/** Getting Room Education Level */}
      <div className='w-full h-screen bg-slate-100 flex flex-col items-center pt-48'>
        <div className='flex flex-col items-center'>
          {" "}
          <Header4XL>Please specify</Header4XL>
          <Header2XL>the variaty of education level for your room</Header2XL>
          <div className='flex flex-col items-center  mb-4'>
            <Select id='educationLevels'>
              <Option selected>Choose an education level</Option>
              <Option value='Elementary School'>Elementary School</Option>
              <Option value='High School'>High School</Option>
              <Option value='Undergraduate'>Undergraduate</Option>
              <Option value='Postgraduate'>Postgraduate</Option>
              <Option value='Doctorate'>Doctorate</Option>
            </Select>
          </div>
          <Link name='educationLevel' to='maxUser' smooth spy offset={-400}>
            <AiOutlineDownCircle
              size={70}
              className='text-blue-500 hover:text-blue-600 hover:cursor-pointer'
            />
          </Link>
        </div>
      </div>
      {/** Getting Room Max User */}
      <div className='w-full h-screen bg-slate-100 flex flex-col items-center pt-48'>
        <div className='mb-4 flex flex-col items-center'>
          <Header4XL>Can you specify</Header4XL>
          <Header2XL>the maximum number of users in your room?</Header2XL>
          <Input type={"number"} name='' id='' setState={setMaxUser} />
        </div>{" "}
        <Link name='maxUser' to='roomType' smooth spy offset={-400}>
          <AiOutlineDownCircle
            size={70}
            className='text-blue-500 hover:text-blue-600 hover:cursor-pointer'
          />
        </Link>
      </div>
      {/** Getting Room Type */}
      <div className='w-full h-screen bg-slate-100 flex flex-col items-center '>
        <div className='flex flex-col items-center mb-12'>
          <Header4XL>Lastly</Header4XL>
          <Header2XL>Which room type do you prefer?</Header2XL>
          <div className='w-full mb-4'>
            <Select id='roomTypes'>
              <Option selected>Choose a room type</Option>
              <Option>Yazili</Option>
              <Option>Sesli</Option>
              <Option>Cizimli</Option>
            </Select>
          </div>
        </div>
        <div name='roomType' className=' w-[20%] flex flex-col'>
          <SubmitButon>Create Room</SubmitButon>
        </div>
      </div>
    </>
  );
};
