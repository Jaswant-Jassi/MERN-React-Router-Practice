import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

export default function signupPage() {
  const initialValues= {
    username: '',
    email: '',
    password: '',
  };

  const onSubmit= values => {
    alert(JSON.stringify(values, null, 2));
  }
  
  const validate= (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = 'Required'
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 13) {
      errors.password = '13 characters are required';
    }
  
    return errors;
  }

  const formik = useFormik({initialValues, onSubmit, validate})
 
  return (
    <>
      <div className="bg-slate-400 h-screen w-screen flex items-center justify-center">
        <div
          id="form-container"
          className="bg-white p-10 rounded-lg shadow-2xl w-80 transform transition duration-500 ease-in-out"
        >
          <h2
            id="form-title"
            className="text-center text-2xl font-bold mb-10 text-gray-800"
          >
            Create new account
          </h2>
          <form onSubmit={formik.handleSubmit} className="space-y-5">
            
            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="Alwin Richard IV"
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.errors.username && formik.touched.username && <p>{formik.errors.username}</p>}
            
            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="asdfg.qwe@gmail.com"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && <p>{formik.errors.email}</p>}
           
            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && <p>{formik.errors.password}</p>}

            <div className="min-h-6 pl-7 mb-0.5 block">
              <input
                defaultChecked=""
                defaultValue=""
                type="checkbox"
                className="w-5 h-5 ease-soft -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-200 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                id="terms"
              />
              <label
                htmlFor="terms"
                className="mb-2 ml-1 font-normal cursor-pointer select-none text-sm text-slate-700"
              >
                {" "}
                I agree the{" "}
                <Link className="font-bold text-slate-700">
                  Terms and Conditions
                </Link>
                <svg
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 inline ml-1 fill-current text-green-500"
                >
                  <path d="M6.293 9.293a1 1 0 0 1 1.414 0L10 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z" />
                </svg>
              </label>
            </div>
            <button type="submit" className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign up
            </button>

            <p className="mt-4 mb-0 text-sm flex justify-center">
              Already have an account?{" "}
              <Link className="font-bold text-slate-700" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
