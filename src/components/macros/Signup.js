import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiFillEye } from "react-icons/ai";
import { FormikInputField } from "../micros/FormikInputField";
const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Signup = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className='flex flex-col justify-center items-center m-10'>
      <h1 className='font-bold text-lg text-blue-500'>Signup</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form className='flex flex-col'>
              <FormikInputField type='email' name='email'>
                Email:
              </FormikInputField>
              <FormikInputField type='password' name='password'>
                Password:
              </FormikInputField>
              <FormikInputField type='password' name='confirm_password'>
                Confirm Password:
              </FormikInputField>

              <div className='flex justify-center items-center'>
                <button
                  className='bg-blue-400 mt-5 w-full rounded-lg p-2 py-3 text-white'
                  type='submit'
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Signup;
