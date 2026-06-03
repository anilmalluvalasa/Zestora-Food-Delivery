import React from 'react';

import "./Footer.css";

import { useNavigate } from "react-router-dom";

function Footer() {

  const navigate = useNavigate();

  return (
    

    <footer className="premium-footer">

      <div className="footer-top-bar">

  <marquee scrollamount="10">

    ☕ Hot Fresh Coffee Brewed to Order &nbsp;&nbsp;&nbsp;&nbsp;

    🍜 Asian Fusion Specials Every Weekend &nbsp;&nbsp;&nbsp;&nbsp;

    🥗 Healthy Bowls for Your Fitness Goals &nbsp;&nbsp;&nbsp;&nbsp;

    🍰 Chef's Special Desserts - Limited Stock &nbsp;&nbsp;&nbsp;&nbsp;

    🥤 Chilled Beverages Available Now

  </marquee>

</div>

      <div className="footer-grid">

        <div className="footer-box">

          <h2>Zestora 🍴</h2>

          <p>
            Premium food delivery experience with
            delicious meals, refreshing drinks,
            desserts and ultra fast delivery.
          </p>

          <div className="social-icons">

  <i className="fa-brands fa-facebook-f"></i>

  <i className="fa-brands fa-instagram"></i>

  <i className="fa-brands fa-twitter"></i>

  <i className="fa-brands fa-youtube"></i>

</div>

</div>

  <div className="footer-box">
        <h3>Quick Links</h3>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/veg")}>Veg</button>
        <button onClick={() => navigate("/nonveg")}>Non-Veg</button>
        <button onClick={() => navigate("/drinks")}>Drinks</button>
        <button onClick={() => navigate("/icecreams")}>IceCreams</button>
      
  </div>

        <div className="footer-box">

          <h3>Contact</h3>

          <p>📍 Hyderabad, India</p>

          <p>📞 +91 8179387963</p>

          <p>✉️ anilkumarmalluvalasa@gmail.com</p>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 Zestora. All Rights Reserved.

      </div>
      <button
  className="top-btn"
  onClick={() => window.scrollTo({
    top: 0,
    behavior: "smooth"
  })}
>
  ↑ TOP
</button>
    </footer>
  );
}

export default Footer;