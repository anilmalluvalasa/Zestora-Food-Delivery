import React, { useState } from "react";
import "./drinks.css";
import { useDispatch } from "react-redux";
import { addtoCart } from "./cartSlice";
import { toast, ToastContainer } from 'react-toastify';
import Footer from './Footer';


function DrinksItems() {

const drinksItems = [
  { id: 1, name: "Coca Cola", price: 50, image: "/Images/CocaCola.jpg", description: "Cool", discount: "10% OFF", rating: 4.3 },

  { id: 2, name: "Pepsi", price: 50, image: "/Images/Pepsi.jpg", description: "Refreshing", discount: "12% OFF", rating: 4.4 },

  { id: 3, name: "Sprite", price: 45, image: "/Images/Sprite.jpg", description: "Lime", discount: "8% OFF", rating: 4.2 },

  { id: 4, name: "Fanta", price: 45, image: "/Images/Fanta.jpg", description: "Orange", discount: "10% OFF", rating: 4.1 },

  { id: 5, name: "Ice Tea", price: 70, image: "/Images/IceTea.jpg", description: "Cool", discount: "15% OFF", rating: 4.5 },

  { id: 6, name: "Energy Drink", price: 120, image: "/Images/EnergyDrink.jpg", description: "Power", discount: "20% OFF", rating: 4.7 },

  { id: 7, name: "Smoothie", price: 110, image: "/Images/Smoothie.jpg", description: "Creamy", discount: "18% OFF", rating: 4.6 },

  { id: 8, name: "Water Bottle", price: 20, image: "/Images/WaterBottle.jpg", description: "Pure", discount: "5% OFF", rating: 4.0 },

  { id: 9, name: "Thumbs Up", price: 50, image: "/Images/ThumbsUp.jpg", description: "Strong", discount: "11% OFF", rating: 4.3 },

  { id: 10, name: "Maaza", price: 60, image: "/Images/Maaza.jpg", description: "Mango", discount: "14% OFF", rating: 4.5 },

  { id: 11, name: "Slice", price: 60, image: "/Images/Slice.jpg", description: "Juicy", discount: "13% OFF", rating: 4.4 },

  { id: 12, name: "Appy Fizz", price: 55, image: "/Images/AppyFizz.jpg", description: "Sparkling", discount: "12% OFF", rating: 4.3 },

  { id: 13, name: "Real Juice", price: 70, image: "/Images/RealJuice.jpg", description: "Fresh", discount: "16% OFF", rating: 4.6 },

  { id: 14, name: "Tropicana", price: 75, image: "/Images/Tropicana.jpg", description: "Healthy", discount: "18% OFF", rating: 4.7 },

  { id: 15, name: "Lassi", price: 40, image: "/Images/Lassi.jpg", description: "Sweet", discount: "9% OFF", rating: 4.2 },

  { id: 16, name: "Buttermilk", price: 35, image: "/Images/Buttermilk.jpg", description: "Cool", discount: "7% OFF", rating: 4.1 },

  { id: 17, name: "Cold Coffee", price: 80, image: "/Images/ColdCoffee.jpg", description: "Chilled", discount: "17% OFF", rating: 4.6 },

  { id: 18, name: "Milkshake", price: 90, image: "/Images/Milkshake.jpg", description: "Thick", discount: "15% OFF", rating: 4.5 },

  { id: 19, name: "Mojito", price: 100, image: "/Images/Mojito.jpg", description: "Minty", discount: "19% OFF", rating: 4.8 },

  { id: 20, name: "Lemon Soda", price: 40, image: "/Images/LemonSoda.jpg", description: "Tangy", discount: "8% OFF", rating: 4.2 },

  { id: 21, name: "Chocolate Shake", price: 95, image: "/Images/ChocolateShake.jpg", description: "Sweet", discount: "20% OFF", rating: 4.8 },

  { id: 22, name: "Strawberry Shake", price: 95, image: "/Images/StrawberryShake.jpg", description: "Fruity", discount: "18% OFF", rating: 4.7 },

  { id: 23, name: "Vanilla Milkshake", price: 90, image: "/Images/VanillaMilkshake.jpg", description: "Classic", discount: "14% OFF", rating: 4.4 },

  { id: 24, name: "Green Tea", price: 40, image: "/Images/GreenTea.jpg", description: "Healthy", discount: "10% OFF", rating: 4.3 },

  { id: 25, name: "Black Coffee", price: 60, image: "/Images/BlackCoffee.jpg", description: "Strong", discount: "13% OFF", rating: 4.5 },

  { id: 26, name: "Hot Coffee", price: 50, image: "/Images/HotCoffee.jpg", description: "Warm", discount: "11% OFF", rating: 4.2 },

  { id: 27, name: "Fruit Punch", price: 110, image: "/Images/FruitPunch.jpg", description: "Mixed", discount: "21% OFF", rating: 4.8 },

  { id: 28, name: "Falooda", price: 120, image: "/Images/Falooda.jpg", description: "Dessert", discount: "22% OFF", rating: 4.9 },

  { id: 29, name: "Orange Juice", price: 70, image: "/Images/OrangeJuice.jpg", description: "Citrus", discount: "15% OFF", rating: 4.5 },

  { id: 30, name: "Blue Lagoon", price: 120, image: "/Images/BlueLagoon.jpg", description: "Chilled", discount: "20% OFF", rating: 4.8 },

  { id: 31, name: "Pineapple Juice", price: 75, image: "/Images/PineappleJuice.jpg", description: "Fresh", discount: "16% OFF", rating: 4.6 },

  { id: 32, name: "Rose Milk", price: 60, image: "/Images/RoseMilk.jpg", description: "Sweet", discount: "12% OFF", rating: 4.3 }
];

 const[currentpage,setCurrentPage] = useState(1);
 
 const [search,setSearch] = useState("");
  // let totalItems = drinksItems.length;
  let filteredItems = drinksItems.filter((item)=>

            item.name.toLowerCase().includes(
              search.toLowerCase()
            )); 

let totalItems = filteredItems.length;
  let itemsPerPage = 8;

  let totalPages = Math.ceil(totalItems/itemsPerPage);



  const lastItem = currentpage*itemsPerPage;

  const firstItem = lastItem-itemsPerPage;
const subarr = filteredItems.slice(firstItem,lastItem);

  const dispatch=useDispatch();

  let drinksList = subarr.map((juice) => (

    <li key={juice.id}>

      <span className="discount">
        {juice.discount}
      </span>

      <span className="drinks-tag">
        DRINK
      </span>

      <img src={juice.image} alt={juice.name} />

          <h3>{juice.name}</h3>

          <p className="food-desc1">

            {juice.description}

          </p>

          <p className="price">
            ₹{juice.price}
          </p>

      <p className="rating">
        ⭐⭐⭐⭐⭐
        <span>({juice.rating})</span>
      </p>
      <p className="delivery">
  ⚡ 10-15 Min Delivery
        </p>

      <button onClick={()=>{dispatch(addtoCart(juice));
                            toast.success(`${juice.name} Added to cart Successfully!`)
      }}>
        Add to Cart
      </button>

    </li>

  ));

  return (
    
      <div className="drinks-container">
        <ToastContainer position="top-right" autoClose={1000} />
      <h2 className="title">
        Refreshing Drink Collection
      </h2>
      <div className="search-box">

  <input
    type="text"

    placeholder="Search Refreshing Drinks..."

    value={search}

    onChange={(e)=>{
      setSearch(e.target.value);
      setCurrentPage(1);
    }
    }
  />

</div>

      <ol>{drinksList}</ol>

      <div className="pagination  ">

        <button
          onClick={()=>setCurrentPage(currentpage-1)}
          disabled={currentpage===1}
        >
          Prev
        </button>

        {
          Array.from({length:totalPages},(_,index)=>(

            <button
              key={index+1}
              onClick={()=>setCurrentPage(index+1)}
            >
              {index+1}
            </button>

          ))
        }

        <button
          onClick={()=>setCurrentPage(currentpage+1)}
          disabled={currentpage===totalPages}
        >
          Next
        </button>

      </div>
      <Footer/>
    </div>
    
  );
}

export default DrinksItems;