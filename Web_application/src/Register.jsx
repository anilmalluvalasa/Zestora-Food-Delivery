import React from 'react';
import { Link } from "react-router-dom";

import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import "./Account.css";
 

function Register() {

  const { register,handleSubmit,reset } = useForm();
let registerLogic = (userdata) => {

  if(userdata.password !== userdata.confirmPassword){

  Swal.fire({

    icon:"error",

    title:"Passwords Do Not Match"

  });

  return;
}

  let users =
    JSON.parse(
      localStorage.getItem("user")
    ) || [];

  let existingUser =
    users.find(
      user =>
      user.email === userdata.email
    );

  if(existingUser){

    Swal.fire({

      icon:"error",

      title:"Email Already Exists",

      text:"Please login instead.",

      confirmButtonColor:"#ef4444"

    });

    return;
  }

  users.push(userdata);

  localStorage.setItem(
    "user",
    JSON.stringify(users)
  );

  Swal.fire({

    icon:"success",

    title:"Registration Successful 🎉",

    text:"Welcome to Zestora!",

    confirmButtonColor:"#f59e0b",

    background:"#111827",

    color:"#ffffff"
  });

  reset();



};






 return (

  <div className="auth-container">

    {/* LEFT SIDE */}

    <div className="auth-form">

      <h1>Create Account 🚀</h1>

      <p>
        Register now and enjoy premium
        food ordering experience.
      </p>

      <form
        onSubmit={handleSubmit(registerLogic)}
      >

        <div className="input-group">

          <input
            type="text"
            placeholder="Enter Your Name"
            {...register("name",{required:true})}
          />

        </div>

        <div className="input-group">

          <input
            type="email"
            placeholder="Enter Email"
            {...register("email",{required:true})}
          />

        </div>

        <div className="input-group">

          <input
            type="tel"
            placeholder="Enter Mobile Number"
            {...register("phone",{required:true})}
          />

        </div>

        <div className="input-group">

          <input
            type="password"
            placeholder="Enter Password"
            {...register("password",{required:true})}
          />

        </div>

        <div className="input-group">

          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword",{required:true})}
          />

        </div>

        <div className="input-group">

          <textarea
            rows="3"
            placeholder="Enter Address"
            {...register("address",{required:true})}
          ></textarea>

        </div>

        <div className="input-group">

          <select
            {...register("gender",{required:true})}
          >

            <option value="">
              Select Gender
            </option>

            <option value="Male">
              Male
            </option>

            <option value="Female">
              Female
            </option>

            <option value="Other">
              Other
            </option>

          </select>

        </div>

        <div className="terms-box">

          <input
            type="checkbox"
            {...register("terms",{required:true})}
          />

          <span>
            I agree to Terms &
            Conditions
          </span>

        </div>

        <button
          type="submit"
          className="auth-btn"
        >

          Register Now

        </button>

      </form>

    </div>

    {/* RIGHT SIDE */}

    <div className="auth-side">

      <div className="side-content">
        <div className="floating-food">

  🍕 🍔 🍟 🥤

</div>

        <h1>

          Zestora 🍴

        </h1>

        <p>

          Taste Beyond Expectations

        </p>

        <span>

          Already have an account?

        </span>

        
       <Link
          to="/login"
          className="switch-btn">
           Login Now
        </Link>

      </div>
      <div className="auth-footer">

  © 2026 Zestora • Fresh Food Delivered Fast

</div>

    </div>

  </div>

);
}

export default Register;