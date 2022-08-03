import React, { useState, useEffect, useRef } from "react";
import { AiOutlineDownCircle } from "react-icons/ai";
import { Link, Element } from "react-scroll";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { SubmitButon } from "../micros/SubmitButon";
import { educationLevels, roomTypes } from "../../utils/constants";
import { Header2XL } from "../micros/Header2XL";
import { Header4XL } from "../micros/Header4XL";
import Input from "../micros/Input";
import Option from "../micros/Option";
import { fetchLessons, fetchTopics } from "../../firebase-config";
import { collectionGroup } from "firebase/firestore";
export const CreateRoom = () => {
  const animatedSelect = makeAnimated();

  const selectTopicRef = useRef(null);

  const [name, setName] = useState(null);
  const [educationLevel, setEducationLevel] = useState(null);
  const [maxUser, setMaxUser] = useState(null);
  const [roomType, setRoomType] = useState(null);
  const [lesson, setLesson] = useState();
  const [topic, setTopic] = useState();

  const [lessonsList, setlessonsList] = useState();
  const [topicsList, settopicsList] = useState();

  const [selectedEducationLevels, setSelectedEducationLevels] = useState("");
  const [selectedRooomTypes, setSelectedRooomTypes] = useState("");

  useEffect(() => {
    fetchLessons()
      .then((res) => {
        setlessonsList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    console.log({ lesson: lesson, topic: topic });
  }, [topic, lesson]);

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
            <Select
              placeholder='Choose a lesson...'
              components={animatedSelect}
              options={lessonsList}
              onChange={(e) => {
                selectTopicRef.current.focus();
                selectTopicRef.current.clearValue();
                setTopic(null);
                setLesson(e.value);
                fetchTopics(e.value).then((res) => {
                  console.log(res);
                  settopicsList(res.topics);
                });
              }}
            />
          </div>
          <div className='flex flex-col items-center mb-4'>
            <Header2XL>Topic</Header2XL>
            <Select
              ref={selectTopicRef}
              placeholder='Choose a topic...'
              components={animatedSelect}
              options={topicsList}
              onChange={(e) => {
                if (e != null) {
                  setTopic(e.value);
                }
              }}
            />
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
          <div className='flex flex-col items-center mb-4'>
            <Select
              placeholder='Choose an education level...'
              components={animatedSelect}
              options={educationLevels}
              value={selectedEducationLevels}
              onChange={(e) => {
                setSelectedEducationLevels(e);
              }}
              isMulti
            ></Select>
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
          <div className='w-full mb-4 flex flex-col items-center'>
            {" "}
            <Select
              placeholder='Choose a room type...'
              value={selectedRooomTypes}
              components={animatedSelect}
              isMulti
              options={roomTypes}
              onChange={(e) => {
                setSelectedRooomTypes(e);
              }}
            />
          </div>
        </div>
        <div name='roomType' className=' w-[20%] flex flex-col'>
          <SubmitButon>Create Room</SubmitButon>
        </div>
      </div>
    </>
  );
};
