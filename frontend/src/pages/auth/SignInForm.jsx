import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
// import { SignInUser } from "../../../Redux/Features/customerSlice.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const { loading, error, isAuthenticated, user, message } = useSelector(
  //     (state) => state.customer
  //   );
  //   console.log("err", error);

  //   const role = user?.data?.userData?.role;
  //   const id = user?.data?.userData?._id;

  //   useEffect(() => {
  //     if (isAuthenticated && role == 1) {
  //       navigate(`/admin/${id}`);
  //       toast.success(message);
  //     }
  //   }, [isAuthenticated]);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        // dispatch(SignInUser(values));
        // if (!isAuthenticated || role !== 1) {
        //   toast.error(error);
        // }
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className="w-full max-w-sm p-8 bg-[#fff] rounded-lg shadow-lg border border-gray-400 h-auto mx-auto my-8">
          <div className="bg-[#F8F6F5] border-red-600 p-4 rounded mb-4">
            <h2 className="text-2xl font-bold text-gray-800 bg-[#F7EAE2] text-left">
              Login
            </h2>
            <p className="text-sm font-semibold text-black-600 text-left mt-3">
              Please enter your contact details to connect.
            </p>
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <Field
              name="email"
              type="email"
              className={`text-gray-700 border bg-[#F8F6F5] border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-[#5C7E8E] ${
                errors.email && touched.email ? "border-red-500" : ""
              }`}
              placeholder="Email Address"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="mt-4 relative">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <Field
              name="password"
              type={showPassword ? "text" : "password"}
              className={`text-gray-700 border bg-[#F8F6F5] border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-[#5C7E8E] ${
                errors.password && touched.password ? "border-red-500" : ""
              }`}
              placeholder="Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 pt-5 flex items-center text-gray-500"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-28 space-x-4 items-center justify-center mt-4">
            <div className="flex items-center">
              <Field
                type="checkbox"
                name="remember"
                id="remember-me"
                className="form-checkbox h-4 w-4 text-gray-500 transition duration-150 ease-in-out"
              />
              <label
                htmlFor="remember-me"
                className="text-xs text-gray-500 hover:text-gray-900 ml-2"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-900 block mt-2 md:mt-0"
            >
              Forget Password?
            </a>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="bg-[#5C7E8E] text-white font-bold py-2 px-4 w-full rounded hover:bg-[#4A626D] focus:outline-none focus:ring-2 focus:ring-[#5C7E8E]"
            >
              Login
            </button>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <a
              href="#"
              className="flex items-center justify-center w-full py-3 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
            >
              <div className="flex items-center px-4">
                <svg className="h-6 w-6 mr-2" viewBox="0 0 40 40">
                  <title id="svg-title">Pet Adoption Icon</title>
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
                <span className="text-gray-600 font-bold">
                  Log in with Google
                </span>
              </div>
            </a>
          </div>
          <div
            className="mt-4 text-center hover:cursor-pointer"
            // onClick={() => navigate("/signup")}
          >
            <a
              href="/signup"
              className="text-xs text-gray-500 capitalize hover:text-gray-900"
            >
              Don&apos;t have an account?{" "}
              <span className="text-gray-700 font-bold">Sign up here</span>
            </a>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
