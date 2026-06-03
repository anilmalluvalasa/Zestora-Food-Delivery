import React from 'react'
import Home from './Home';
import Veg from './Veg';
import Nonveg from './Nonveg';

import ContactUs from './ContactUs';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Cart from './Cart';
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import DrinksItems from './DrinksItems';
import { useSelector } from 'react-redux';
import IceCreams from './IceCreams';
import Orders from './Orders';
import Register from './Register';
import Login from './Login';

function App() {
  
  let cartItems = useSelector((globalState)=>globalState.cart);
  let cartQuantity = cartItems.reduce((total,item)=>(total+item.quantity),0);


  let users = JSON.parse(localStorage.getItem("loggedInUser"));

  let logoutLogic = ()=>{

    localStorage.removeItem("loggedInUser")

    window.location.reload();

  }
  
  return (
    <>
  <BrowserRouter>
      
  <nav className="navbar">

  <div className="logo">

  <div className="logo-icon">
    🍴
  </div>

  <div>

    <h2>Zestora</h2>

    <span>
      Taste Beyond Expectations
    </span>

  </div>

</div>

  <div className="nav-links">

    <Link to="/">
      <i className="fa-solid fa-house"></i>
      Home
    </Link>

    <Link to="/veg">
      <i className="fa-solid fa-leaf"></i>
      Veg
    </Link>

    <Link to="/nonveg">
      <i className="fa-solid fa-drumstick-bite"></i>
      Non-Veg
    </Link>

    <Link to="/drinks">
      <i className="fa-solid fa-martini-glass"></i>
      Drinks
    </Link>

    <Link to="/icecreams">
      <i className="fas fa-ice-cream"></i>
      IceCreams
    </Link>

      <Link to="/cart" className="cart-link">
      <i className="fa-solid fa-cart-shopping"></i>Cart <span className="cart-badge">
        {cartQuantity}
      </span>
     </Link>
    
    <Link to="/orders">
      Orders
    </Link>

    <Link to="/contact">
      <i className="fa-solid fa-phone"></i>
      Contact
    </Link>


    {
      users ? (
        <>
          <span className="welcome-user">
            👋 Welcome {users.name}
          </span>

          <button
            className="logout-btn"
            onClick={logoutLogic}
          >
            Logout
          </button>
        </>
      ) : (
       <div className="account-menu">

        <i className="fa-solid fa-circle-user"></i>
          Account
          <div className="account-dropdown">
            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Register
            </Link>

          </div>

        </div>
      )
    }

  </div>

</nav>

    <div className="content">
      <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/veg" element={<Veg />} />

          <Route path="/nonveg" element={<Nonveg />} />

          <Route path="/drinks" element={<DrinksItems />} />

          <Route path="/icecreams" element={<IceCreams />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/contact" element={<ContactUs />} />

          <Route path="/orders" element={<Orders />} />

          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />

        </Routes>
     </div>
  
    </BrowserRouter>
    </>
  )
}
export default App;

