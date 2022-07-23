import React from "react";
import { Field, ErrorMessage } from "formik";

export const FormikInputField = ({ type, name, children }) => {
  return (
    <label className='flex flex-col text-2xl text-blue-400'>
      {children}
      <Field
        className='border-2 border-solid rounded-lg border-blue-300 p-2 focus:outline-blue-600 text-lg'
        type={type}
        name={name}
      />
      <ErrorMessage
        className='text-red-500 font-semibold text-xs'
        name={name}
        component='div'
      />
    </label>
  );
};
