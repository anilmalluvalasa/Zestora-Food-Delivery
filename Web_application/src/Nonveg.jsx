import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addtoCart } from "./cartSlice";
import Veg from './Veg';
import { toast,ToastContainer} from 'react-toastify';
import Footer from './Footer';
import "./Nonveg.css";

function Nonveg() {
  const nonVegItems = [
  {
    id: 1,
    name: "Chicken Biryani",
    price: 240,
    image: "/Images/ChickenBiryani.jpg",
    description: "Spicy",
    discount: "20% OFF",
    rating: 4.8
  },
  {
    id: 2,
    name: "Butter Chicken",
    price: 260,
    image: "/Images/ButterChicken.jpg",
    description: "Creamy",
    discount: "18% OFF",
    rating: 4.7
  },
  {
    id: 3,
    name: "Chicken Tikka",
    price: 280,
    image: "/Images/ChickenTikka.jpg",
    description: "Grilled",
    discount: "15% OFF",
    rating: 4.6
  },
  {
    id: 4,
    name: "Mutton Curry",
    price: 320,
    image: "/Images/MuttonCurry.jpg",
    description: "Rich",
    discount: "22% OFF",
    rating: 4.9
  },
  {
    id: 5,
    name: "Fish Fry",
    price: 220,
    image: "/Images/FishFry.jpg",
    description: "Crispy",
    discount: "12% OFF",
    rating: 4.4
  },
  {
    id: 6,
    name: "Prawn Masala",
    price: 300,
    image: "/Images/PrawnMasala.jpg",
    description: "Spicy",
    discount: "16% OFF",
    rating: 4.7
  },
  {
    id: 7,
    name: "Chicken 65",
    price: 230,
    image: "/Images/Chicken65.jpg",
    description: "Fried",
    discount: "14% OFF",
    rating: 4.5
  },
  {
    id: 8,
    name: "Egg Curry",
    price: 160,
    image: "/Images/EggCurry.jpg",
    description: "Classic",
    discount: "10% OFF",
    rating: 4.2
  },
  {
    id: 9,
    name: "Grilled Chicken",
    price: 270,
    image: "/Images/GrilledChicken.jpg",
    description: "Smoky",
    discount: "17% OFF",
    rating: 4.8
  },
  {
    id: 10,
    name: "Chicken Fried Rice",
    price: 190,
    image: "/Images/ChickenFriedRice.jpg",
    description: "Savory",
    discount: "11% OFF",
    rating: 4.3
  },
  {
    id: 11,
    name: "Chicken Noodles",
    price: 180,
    image: "/Images/ChickenNoodles.jpg",
    description: "Noodles",
    discount: "9% OFF",
    rating: 4.1
  },
  {
    id: 12,
    name: "Mutton Biryani",
    price: 340,
    image: "/Images/MuttonBiryani.jpg",
    description: "Aromatic",
    discount: "25% OFF",
    rating: 4.9
  },
  {
    id: 13,
    name: "Fish Curry",
    price: 250,
    image: "/Images/FishCurry.jpg",
    description: "Tangy",
    discount: "13% OFF",
    rating: 4.4
  },
  {
    id: 14,
    name: "Prawn Fry",
    price: 290,
    image: "/Images/PrawnFry.jpg",
    description: "Crunchy",
    discount: "18% OFF",
    rating: 4.6
  },
  {
    id: 15,
    name: "Chicken Shawarma",
    price: 200,
    image: "/Images/ChickenShawarma.jpg",
    description: "Wrap",
    discount: "12% OFF",
    rating: 4.5
  },
  {
    id: 16,
    name: "Chicken Lollipop",
    price: 210,
    image: "/Images/ChickenLolypops.jpg",
    description: "Juicy",
    discount: "14% OFF",
    rating: 4.6
  },
  {
    id: 17,
    name: "Egg Fried Rice",
    price: 150,
    image: "/Images/EggFriedRice.jpg",
    description: "Simple",
    discount: "8% OFF",
    rating: 4.0
  },
  {
    id: 18,
    name: "Chicken Fry",
    price: 230,
    image: "/Images/ChickenFry.jpg",
    description: "Traditional",
    discount: "15% OFF",
    rating: 4.4
  },
  {
    id: 19,
    name: "Kfc",
    price: 310,
    image: "/Images/Kfc.jpg",
    description: "Fried Chicken",
    discount: "20% OFF",
    rating: 4.8
  },
  {
    id: 20,
    name: "Pizza",
    price: 270,
    image: "/Images/Pizza.jpg",
    description: "Flavorful",
    discount: "16% OFF",
    rating: 4.5
  },

  {
    id: 21,
    name: "Chicken Curry",
    price: 240,
    image: "/Images/ChickenCurry.jpg",
    description: "Spicy",
    discount: "13% OFF",
    rating: 4.4
  },
  {
    id: 22,
    name: "Mutton Keema",
    price: 300,
    image: "/Images/MuttonKeema.jpg",
    description: "Minced",
    discount: "19% OFF",
    rating: 4.7
  },
  {
    id: 23,
    name: "Fish Tikka",
    price: 260,
    image: "/Images/FishTikka.jpg",
    description: "Grilled",
    discount: "15% OFF",
    rating: 4.5
  },
  {
    id: 24,
    name: "Prawn Biryani",
    price: 320,
    image: "/Images/PrawnBiryani.jpg",
    description: "Aromatic",
    discount: "22% OFF",
    rating: 4.8
  },
  {
    id: 25,
    name: "Chicken Wings",
    price: 220,
    image: "/Images/ChickenWings.jpg",
    description: "Crispy",
    discount: "12% OFF",
    rating: 4.3
  },

  {
    id: 26,
    name: "Egg Omelette",
    price: 80,
    image: "/Images/EggOmelette.jpg",
    description: "Simple",
    discount: "6% OFF",
    rating: 4.0
  },
  {
    id: 27,
    name: "Chicken Kebab",
    price: 260,
    image: "/Images/ChickenKebab.jpg",
    description: "Smoky",
    discount: "17% OFF",
    rating: 4.6
  },
  {
    id: 28,
    name: "Mutton Fry",
    price: 340,
    image: "/Images/MuttonFry.jpg",
    description: "Rich",
    discount: "24% OFF",
    rating: 4.9
  },
  {
    id: 29,
    name: "Fish Fingers",
    price: 200,
    image: "/Images/FishFingers.jpg",
    description: "Crunchy",
    discount: "10% OFF",
    rating: 4.2
  },
  {
    id: 30,
    name: "Chicken Soup",
    price: 120,
    image: "/Images/ChickenSoup.jpg",
    description: "Warm",
    discount: "8% OFF",
    rating: 4.1
  },

  {
    id: 31,
    name: "Prawn Curry",
    price: 310,
    image: "/Images/PrawnCurry.jpg",
    description: "Tangy",
    discount: "18% OFF",
    rating: 4.7
  },
  {
    id: 32,
    name: "Chicken Sandwich",
    price: 150,
    image: "/Images/ChickenSandwich.jpg",
    description: "Quick",
    discount: "11% OFF",
    rating: 4.3
  }
];

const [currentPage,setCurrentPage] = useState(1);

const [search,setSearch] = useState("");
let filteredItems = nonVegItems.filter((item)=>

  item.name.toLowerCase().includes(
    search.toLowerCase()
  )
);
// let totalItems = nonVegItems.length;
      let totalItems = filteredItems.length;
let itemsPerPage = 8;

let totalPages = Math.ceil(totalItems/itemsPerPage);



const lastItem = currentPage * itemsPerPage;

const firstItem = lastItem-itemsPerPage;



let subarray = filteredItems.slice(firstItem,lastItem);

const dispatch = useDispatch();    


let NonvegList = subarray.map((nonveg) => (
    <li key={nonveg.id}>

      <span className="discount">
        {nonveg.discount}
      </span>

      <span className="nonveg-tag">
        NON VEG
      </span>

      <img
        src={nonveg.image}
        alt={nonveg.name}
      />

      <h3>{nonveg.name}</h3>
      <p className="food-desc">

        {nonveg.description}

      </p>

      <p className="price">
        ₹{nonveg.price}
      </p>

      <p className="rating">
        ⭐⭐⭐⭐⭐
        <span>({nonveg.rating})</span>
      </p>
      <p className="delivery">
  ⚡ 20-30 Min Delivery
</p>

      <button onClick={() => {dispatch(addtoCart(nonveg));
                              toast.success(`${nonveg.name} Added to cart Successfully!`)
      }}>
        Add to Cart
      </button>

    </li>

  ));

  return (

    <div className="nonveg-container">
     <ToastContainer
        position="top-right"
        autoClose={1000}
      />
      <h2 className="title">
        Signature Non-Veg Feast
      </h2>

      <div className="search-box">

  <input
    type="text"

    placeholder="Search Delicious Foods..."

    value={search}
    onChange={(e) => { setSearch(e.target.value);
                        setCurrentPage(1);
             }} />  
</div>

      <ol>
        {NonvegList}
      </ol>

      <div className='pagination'>

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
    
  );
}

export default Nonveg;