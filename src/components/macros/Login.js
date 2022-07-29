import React from "react";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { FormikInputField } from "../micros/FormikInputField";
const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className='flex flex-col justify-center items-center m-10'>
      <h1 className='font-bold text-lg text-blue-500'>Login</h1>
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
      <p>
        Don't you have any account? {}
        <button className="text-blue-500" onClick={() => navigate("/signup")}>
          SignUp
        </button>
      </p>
    </div>
  );
};

export default Login;
