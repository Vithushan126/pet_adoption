import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
// import { SignUpCustomer } from "../../../Redux/Features/customerSlice";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const { loading, error, isAuthenticated, user } = useSelector(
  //     (state) => state.customer
  //   );

  //   useEffect(() => {
  //     if (isAuthenticated) {
  //       navigate("/dashboard");
  //     }
  //   }, [isAuthenticated, navigate]);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        // dispatch(SignUpCustomer(values));
        resetForm();
        navigate("/login");
      }}
    >
      {({ errors, touched }) => (
        <Form className="w-full max-w-sm p-8 bg-[#fff] rounded-lg shadow-lg border border-gray-400 h-auto mx-auto my-8">
          <div className="bg-[#F8F6F5] border-red-600 p-4 rounded mb-4">
            <h2 className="text-2xl font-bold text-gray-800 bg-[#F7EAE2] text-left">
              Create New Account
            </h2>
            <p className="text-sm font-semibold text-black-600 text-left mt-3">
              Enter your details to create a new account.
            </p>
          </div>

          <div className="mt-4">
            <label
              htmlFor="firstname"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              First Name
            </label>
            <Field
              name="firstName"
              type="text"
              className={`text-gray-700 border bg-[#F8F6F5] border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-[#5C7E8E] ${
                errors.firstName && touched.firstName ? "border-red-500" : ""
              }`}
              placeholder="First Name"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="lastname"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Last Name
            </label>
            <Field
              name="lastName"
              type="text"
              className={`text-gray-700 border bg-[#F8F6F5] border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-[#5C7E8E] ${
                errors.lastName && touched.lastName ? "border-red-500" : ""
              }`}
              placeholder="Last Name"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
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
              className="absolute inset-y-0 right-0 pr-3 pt-5 flex items-center  text-gray-500"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div className="mt-4 relative">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm Password
            </label>
            <Field
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              className={`text-gray-700 border bg-[#F8F6F5] border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-[#5C7E8E] ${
                errors.confirmPassword && touched.confirmPassword
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Confirm Password"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div className="mt-8">
            {/* {loading} */}
            <button
              type="submit"
              className="bg-[#5C7E8E] text-white font-bold py-2 px-4 w-full rounded hover:bg-[#4A626D] focus:outline-none focus:ring-2 focus:ring-[#5C7E8E]"
            >
              Sign Up
            </button>
          </div>

          <div className="mt-4 text-center hover:cursor-pointer">
            <a
              href="/login"
              className="text-xs text-gray-500 capitalize hover:text-gray-900"
            >
              Already have an account?
              <span className="text-gray-700 font-bold">Sign in here</span>
            </a>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
