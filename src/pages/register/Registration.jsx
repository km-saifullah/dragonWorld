import React, { useState } from "react";
import "./registration.css";

const Registration = () => {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
            <form className="register_form" onSubmit={handleAccount}>
              <input
                type="text"
                name="firstName"
                value={registerData.firstName}
                placeholder="First Name"
                onChange={handleFormData}
              />
              <input
                type="text"
                name="lastName"
                value={registerData.lastName}
                placeholder="Last Name"
                onChange={handleFormData}
              />
              <input
                type="email"
                name="email"
                value={registerData.email}
                placeholder="Email"
                onChange={handleFormData}
              />
              <input
                type="password"
                name="password"
                value={registerData.password}
                placeholder="Password"
                onChange={handleFormData}
              />
              <input
                type="password"
                name="confirmPassword"
                value={registerData.confirmPassword}
                placeholder="Confirm Password"
                onChange={handleFormData}
              />
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
