import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

export default function loginPage() {

  const initialValues= {
    email: '',
    password: '',
  };

  const onSubmit= values => {
    alert(JSON.stringify(values, null, 2));
  }
  
  const validate= (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    }
  
    return errors;
  }

  const formik = useFormik({initialValues, onSubmit, validate})

  return (
    <>
      <div className="bg-slate-500 h-screen w-screen flex items-center justify-center">
       
        <div
          id="form-container"
          className="bg-white p-10 rounded-lg shadow-2xl w-1/4 relative z-10 transform transition duration-500 ease-in-out"
        >
          <h2
            id="form-title"
            className="text-center text-3xl font-bold mb-10 text-gray-800"
          >
            Login
          </h2>
          <form onSubmit={formik.handleSubmit} className="space-y-5">
            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="qwertgh@gmail.com"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && <p className="text-red-400">{formik.errors.email}</p>}

            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && <p className="text-red-400">{formik.errors.password}</p>}

            <button className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login
            </button>
            <p className="mt-4 mb-0 text-sm flex justify-center">
              Don't have an account?{" "}
              <Link className="font-bold text-slate-700" to="/signup">
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
