import React, { useEffect, useState } from "react";
import Input from "../micros/Input";
import Option from "../micros/Option";
import Select from "../micros/Select";
import { logout } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase-config";
import { doc, onSnapshot } from "firebase/firestore";
import { useSelector } from "react-redux";

const Account = () => {
  const [birthday, setBirthday] = useState(new Date());
  const navigate = useNavigate();
  const email = useSelector((state) => state.auth.user);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "users", `${email}`), (doc) => {
      const data = doc.data();

      console.log(data);
    });

    return () => {
      unsub();
    };
  }, [email]);

  // const SignOut = async () => {
  //   await logout()
  //   navigate("/", {replace: true})
  // }

  return (
    <>
      <div className='flex justify-center'>
        <form className='grid grid-flow-row  w-[35%] grid-cols-2 justify-center p-[5%] gap-[12%] '>
          <div className='flex flex-col'>
            <label className='font-semibold'>Name:</label>
            <Input />
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold'>Job:</label>
            <Select className='rounded-lg p-2'>
              <Option value=''>Choose...</Option>
              <Option value='Computer Engineer'>Computer Engineer</Option>
              <Option value='Human Resources Manager'>
                Human Resources Manager
              </Option>
              <Option value='>Art Director'>Art Director</Option>
              <Option value='3D Artist'>3D Artist</Option>
              <Option value='Content Creater'>Content Creater</Option>
            </Select>
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold'>Surname:</label>
            <Input />
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold'>Education:</label>
            <Select className='rounded-lg p-2'>
              <Option value=''>Choose...</Option>
              <Option value='Elementary School'>Elementary School</Option>
              <Option value='High School'>High School</Option>
              <Option value='Undergraduate'>Undergraduate</Option>
              <Option value='Postgraduate'>Postgraduate</Option>
              <Option value='Doctorate'>Doctorate</Option>
            </Select>
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold'>Username:</label>
            <Input />
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold'>Birthday:</label>
          </div>
        </form>
      </div>
    </>
  );
};

export default Account;
