import React from "react";

import { useForm } from "react-hook-form";

import { useNavigate, Link } from "react-router-dom";

import Swal from "sweetalert2";

import "./Account.css";

function Login() {

  const {
    register,
    handleSubmit,
    reset
  } = useForm();
 
  const navigate = useNavigate();

  let loginLogic = (loginuser) => {

    let registeredUsers =
      JSON.parse(
        localStorage.getItem("user")
      ) || [];

    let valid = registeredUsers.find(
      (user) =>

        user.email === loginuser.email &&

        user.password === loginuser.password
    );

if (valid) {

  localStorage.setItem(
    "loggedInUser",
    JSON.stringify(valid)
  );

  Swal.fire({

    icon: "success",

    title: "Login Successful 🎉",

    text: "Welcome Back To Zestora!",

    showConfirmButton: false,

    timer: 1900,

    background: "#111827",

    color: "#ffffff",

    iconColor: "#f59e0b"
  });

  navigate("/veg");


}

else {

  Swal.fire({

    icon: "error",

    title: "Invalid Credentials",

    text: "Please check your email & password",

    confirmButtonColor: "#f59e0b",

    background: "#111827",

    color: "#ffffff"
  });

}
     

  
  };
return (

  <div className="auth-container">

```
{/* LEFT SIDE */}

<div className="auth-form">

  <h1>

    Welcome Back 👋 

  </h1>

  <p>

    Login to continue your delicious journey with Zestora.

  </p>

  <form
    onSubmit={handleSubmit(loginLogic)}
  >

    <div className="input-group">

      <input
        type="email"
        placeholder="Enter Your Email"
        {...register(
          "email",
          { required: true }
        )}
      />

    </div>

    <div className="input-group">

      <input
        type="password"
        placeholder="Enter Your Password"
        {...register(
          "password",
          { required: true }
        )}
      />

    </div>

    <button
      type="submit"
      className="auth-btn"
    >

      Login Now

    </button>

  </form>

</div>

{/* RIGHT SIDE */}

<div className="auth-side">

  <div className="side-content">

    <div className="floating-food">

      🍽️ ⭐ 🚚 🔥

    </div>

    <h1>

      Zestora 🍴

    </h1>

    <p>

      Taste Beyond Expectations

    </p>

    <span>

      New to Zestora?

    </span>

    <Link
      to="/register"
      className="switch-btn"
    >

      Register Now

    </Link>

  </div>

  <div className="auth-footer">

  © 2026 Zestora • Taste Beyond Expectations

</div>

</div>

  </div>

);

}

export default Login;