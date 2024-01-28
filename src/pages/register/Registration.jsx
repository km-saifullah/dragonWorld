import React, { useState } from "react";
import { useFormik } from "formik";
import Validation from "../../validation/Validation";
import "./registration.css";

const Registration = () => {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const formik = useFormik({
    initialValues: registerData,
    validationSchema: Validation,
    onSubmit: (values, actions) => {
      console.log(values);
      setRegisterData(values);
      console.log("Registerd Data:", registerData);
    },
  });
  // handle form input fields
  const handleFormData = (e) => {
    let registerInfo = { ...registerData };
    registerInfo[e.target.name] = e.target.value;
    setRegisterData(registerInfo);
  };

  //   handle account click function
  const handleAccount = (e) => {
    console.log(registerData);
    e.preventDefault();
  };
  return (
    <section className="registration">
      <div className="container">
        <div className="register_wrapper">
          <div className="register_heading">
            <h2>Register Your Account</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              aliquid, Non distinctio vel iste.
            </p>
          </div>
          <div>
            <form className="register_form" onSubmit={formik.handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="error">{formik.errors.firstName}</div>
              ) : null}
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="error">{formik.errors.lastName}</div>
              ) : null}
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="error">{formik.errors.confirmPassword}</div>
              ) : null}
              <button className="common_btn" type="submit">
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
