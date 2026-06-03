import React, { useState } from 'react'
import "./IceCreams.css";
import { addtoCart } from "./cartSlice";
import { useDispatch } from "react-redux";
import { toast,ToastContainer } from 'react-toastify';
import Footer from './Footer';

function IceCreams() {
    const iceCreamItems = [

  { id: 1, name: "Vanilla Ice Cream", price: 90, image: "/Images/VanillaIceCream.jpg", description: "Classic", discount: "10% OFF", rating: 4.3 },

  { id: 2, name: "Chocolate Ice Cream", price: 120, image: "/Images/ChocolateIceCream.jpg", description: "Rich", discount: "15% OFF", rating: 4.7 },

  { id: 3, name: "Strawberry Scoop", price: 110, image: "/Images/StrawberryScoop.jpg", description: "Fruity", discount: "12% OFF", rating: 4.5 },

  { id: 4, name: "Butterscotch Delight", price: 130, image: "/Images/ButterscotchDelight.jpg", description: "Crunchy", discount: "18% OFF", rating: 4.6 },

  { id: 5, name: "Black Currant", price: 140, image: "/Images/BlackCurrant.jpg", description: "Berry", discount: "20% OFF", rating: 4.8 },

  { id: 6, name: "Mango Ice Cream", price: 100, image: "/Images/MangoIceCream.jpg", description: "Tropical", discount: "11% OFF", rating: 4.4 },

  { id: 7, name: "Kulfi Special", price: 80, image: "/Images/KulfiSpecial.jpg", description: "Traditional", discount: "8% OFF", rating: 4.5 },

  { id: 8, name: "Oreo Ice Cream", price: 150, image: "/Images/OreoIceCream.jpg", description: "Cookies", discount: "17% OFF", rating: 4.9 },

  { id: 9, name: "Pista Ice Cream", price: 130, image: "/Images/PistaIceCream.jpg", description: "Nutty", discount: "13% OFF", rating: 4.6 },

  { id: 10, name: "Coffee Ice Cream", price: 120, image: "/Images/CoffeeIceCream.jpg", description: "Bold", discount: "14% OFF", rating: 4.3 },

  { id: 11, name: "Blueberry Ice Cream", price: 145, image: "/Images/BlueberryIceCream.jpg", description: "Fresh", discount: "19% OFF", rating: 4.7 },

  { id: 12, name: "Mint Chocolate", price: 150, image: "/Images/MintChocolate.jpg", description: "Cool", discount: "16% OFF", rating: 4.5 },

  { id: 13, name: "Caramel Swirl", price: 140, image: "/Images/CaramelSwirl.jpg", description: "Sweet", discount: "15% OFF", rating: 4.4 },

  { id: 14, name: "Cotton Candy", price: 160, image: "/Images/CottonCandy.jpg", description: "Colorful", discount: "22% OFF", rating: 4.8 },

  { id: 15, name: "Red Velvet Scoop", price: 170, image: "/Images/RedVelvetScoop.jpg", description: "Velvety", discount: "21% OFF", rating: 4.9 },

  { id: 16, name: "Cookies & Cream", price: 150, image: "/Images/Cookies&Cream.jpg", description: "Creamy", discount: "18% OFF", rating: 4.7 },

  { id: 17, name: "Choco Brownie", price: 180, image: "/Images/ChocoBrownie.jpg", description: "Brownie", discount: "20% OFF", rating: 4.9 },

  { id: 18, name: "Bubblegum Ice Cream", price: 140, image: "/Images/BubblegumIceCream.jpg", description: "Fun", discount: "16% OFF", rating: 4.3 },

  { id: 19, name: "Hazelnut Ice Cream", price: 160, image: "/Images/HazelnutIceCream.jpg", description: "Nutty", discount: "17% OFF", rating: 4.6 },

  { id: 20, name: "Belgian Chocolate", price: 190, image: "/Images/BelgianChocolate.jpg", description: "Premium", discount: "25% OFF", rating: 5.0 },

  { id: 21, name: "Raspberry Ripple", price: 150, image: "/Images/RaspberryRipple.jpg", description: "Berry", discount: "15% OFF", rating: 4.4 },

  { id: 22, name: "Choco Chip", price: 130, image: "/Images/ChocoChip.jpg", description: "Crunchy", discount: "12% OFF", rating: 4.5 },

  { id: 23, name: "Fruit Sundae", price: 170, image: "/Images/FruitSundae.jpg", description: "Mixed", discount: "18% OFF", rating: 4.7 },

  { id: 24, name: "Rainbow Scoop", price: 155, image: "/Images/RainbowScoop.jpg", description: "Colorful", discount: "14% OFF", rating: 4.6 },

  { id: 25, name: "Almond Crunch", price: 165, image: "/Images/AlmondCrunch.jpg", description: "Crunchy", discount: "19% OFF", rating: 4.8 },

  { id: 26, name: "Tiramisu Ice Cream", price: 180, image: "/Images/TiramisuIceCream.jpg", description: "Italian", discount: "23% OFF", rating: 4.9 },

  { id: 27, name: "Dark Chocolate Scoop", price: 175, image: "/Images/DarkChocolateScoop.jpg", description: "Bitter", discount: "20% OFF", rating: 4.8 },

  { id: 28, name: "Banana Split", price: 160, image: "/Images/BananaSplit.jpg", description: "Dessert", discount: "17% OFF", rating: 4.5 },

  { id: 29, name: "Honey Almond", price: 145, image: "/Images/HoneyAlmond.jpg", description: "Sweet", discount: "13% OFF", rating: 4.4 },

  { id: 30, name: "Paan Ice Cream", price: 135, image: "/Images/PaanIceCream.jpg", description: "Indian", discount: "15% OFF", rating: 4.2 },

  { id: 31, name: "Rose Kulfi", price: 120, image: "/Images/RoseKulfi.jpg", description: "Floral", discount: "10% OFF", rating: 4.3 },

  { id: 32, name: "Ferrero Rocher Scoop", price: 220, image: "/Images/FerreroRocherScoop.jpg", description: "Luxury", discount: "28% OFF", rating: 5.0 }

];
 
  let [currentPage, setCurrentPage] = useState(1);
 
  const [search,setSearch] = useState("");
  // let totalItems = iceCreamItems.length;
  let filteredItems = iceCreamItems.filter((item)=>

            item.name.toLowerCase().includes(
              search.toLowerCase()
            )
          );

let totalItems = filteredItems.length;

  let itemsPerPage = 8;
  let totalPages = Math.ceil(totalItems / itemsPerPage);



  let EndIndex = currentPage * itemsPerPage;
  let startIndex = EndIndex - itemsPerPage;

 let subarr = filteredItems.slice(startIndex, EndIndex);

  let dispatch = useDispatch();

  let creamItems = subarr.map((cream) => (

    <li key={cream.id}>

      <span className="discount">
        {cream.discount}
      </span>

      <span className="ice-tag">
        ICE CREAM
      </span>

      <img
        src={cream.image}
        alt={cream.name}
      />

      <h3>{cream.name}</h3>

        <p className="food-description">

          {cream.description}

        </p>

        <p className="price">
          ₹{cream.price}
        </p>

      <p className="rating">
        ⭐⭐⭐⭐⭐
        <span>({cream.rating})</span>
      </p>
      <p className="delivery">
  ⚡ 15-20 Min Delivery
</p>

      <button onClick={() => {dispatch(addtoCart(cream));
                              toast.success(` ${cream.name} Added to cart Successfully! `)}
      }>
        Add to Cart
      </button>

    </li>
  ));

  return (

    <div className="icecream-container">
     <ToastContainer
        position="top-right"
        autoClose={1000}
      />

      <h2 className="title">
        Frozen Sweet Delights
      </h2>

      <div className="search-box">

  <input
    type="text"

    placeholder="Search Delicious Ice Creams..."

    value={search}

    onChange={(e)=>{
      setSearch(e.target.value);
      setCurrentPage(1);
      }}/>

</div>

      <ol>
        {creamItems}
      </ol>

      <div className="pagination">

        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {
          Array.from(
            { length: totalPages },
            (_, index) => (

              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>

            )
          )
        }

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>

      </div>
        <Footer/>
    </div>
  )
}

export default IceCreams;