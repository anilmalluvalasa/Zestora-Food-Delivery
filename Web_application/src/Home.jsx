import React from "react";
import "./Home.css";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import Footer from './Footer';

function Home() {
  const navigate = useNavigate();

  return (
    <>
   <div className="video-container">
  {/* Background Video */}
  <video autoPlay muted loop className="bg-video">
    <source src="/Videos/food.mp4" type="video/mp4" />
  </video>

  {/* Overlay */}
  <div className="overlay">

    <h1>Craving Something Delicious? 🍕</h1>

    <p>
      Fresh • Fast • Flavorful Food Delivered To Your Doorstep
    </p>

    <div className="hero-badges">

  <span>⚡ 20 Min Delivery</span>

  <span>🔥 50% OFF</span>

  <span>⭐ 4.9 Rating</span>

</div>

    <button onClick={() => navigate("/veg")}>
      Explore Menu
    </button>

  </div>

</div>

  <div className="food-section">

  <h2>Popular Categories</h2>

  <div className="carousel">

    <div className="food-card">
      <img src="/HomeImages/veg-banner.jpg" alt="Veg" />
      <h3 onClick={()=>navigate("./veg")}>
        Veg Specials
      </h3>
    </div>

    <div className="food-card">
      <img
        src="/HomeImages/nonveg-banner.jpg"
        alt="NonVeg"
      />
      <h3 onClick={()=>navigate("./nonveg")}>
        Non-Veg Feast
      </h3>
    </div>

    <div className="food-card">
      <img
        src="/HomeImages/drinks-banner.jpg"
        alt="Drinks"
      />
      <h3 onClick={()=>navigate("./drinks")}>
        Cool Drinks
      </h3>
    </div>

  </div>

</div>

{/* SHOWCASE SECTION */}

<div className="premium-showcase">

  <h2>Trending Foods 🔥</h2>

  <p className="showcase-subtitle">
    Taste the world’s most loved dishes crafted
    with premium ingredients and unforgettable flavors.
  </p>

  <marquee
    behavior="scroll"
    direction="left"
    scrollamount="13"
  >

    <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=2000&q=100" alt="Pizza" /> <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=2000&q=100" alt="Cheese Pizza" /> <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=2000&q=100" alt="Burger" /> <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=2000&q=100" alt="Premium Burger" /> <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=2000&q=100" alt="Pasta" /> <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=2000&q=100" alt="Italian Pasta" /> <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=100" alt="Luxury Food" /> <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=100" alt="Steak" /> <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=2000&q=100" alt="Healthy Bowl" /> <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=2000&q=100" alt="Breakfast" /> <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=2000&q=100" alt="Pancakes" /> <img src="https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=2000&q=100" alt="Dessert" /> <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=100" alt="Restaurant Food" /> <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=2000&q=100" alt="Luxury Breakfast" /> <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=2000&q=100" alt="Burger Combo" />

  </marquee>

</div>

<Footer/>

</>
  );
  }

export default Home;