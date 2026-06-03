// import React, { useState } from "react";
// import "./Veg.css";
// import { addtoCart } from "./cartSlice";
// import { useDispatch } from "react-redux";

// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from 'react-toastify';
// import Footer from './Footer';


// function Veg() {
//   const vegItems = [
//   { id: 1, name: "Veg Fried Rice", price: 140, image: "/Images/VegFriedRice.jpg", description: "Savory", discount: "10% OFF", rating: 4.3 },

//   { id: 2, name: "Palak Paneer", price: 200, image: "/Images/PalakPaneer.jpg", description: "Healthy", discount: "20% OFF", rating: 4.6 },

//   { id: 3, name: "Aloo Gobi", price: 130, image: "/Images/AlooGobi.jpg", description: "Dry", discount: "15% OFF", rating: 4.1 },

//   { id: 4, name: "Veg Manchurian", price: 160, image: "/Images/VegManchurian.jpg", description: "Saucy", discount: "25% OFF", rating: 4.5 },

//   { id: 5, name: "Paneer Butter Masala", price: 220, image: "/Images/PaneerButterMasala.jpg", description: "Creamy", discount: "18% OFF", rating: 4.8 },

//   { id: 6, name: "Veg Biryani", price: 180, image: "/Images/veg-biryani.jpg", description: "Spicy", discount: "12% OFF", rating: 4.7 },

//   { id: 7, name: "Masala Dosa", price: 120, image: "/Images/MasalaDosa.jpg", description: "Crispy", discount: "8% OFF", rating: 4.4 },

//   { id: 8, name: "Chole Bhature", price: 150, image: "/Images/CholeBhature.jpg", description: "Tangy", discount: "10% OFF", rating: 4.5 },

//   { id: 9, name: "Pav Bhaji", price: 110, image: "/Images/PavBhaji.jpg", description: "Buttery", discount: "14% OFF", rating: 4.2 },

//   { id: 10, name: "Rajma Chawal", price: 140, image: "/Images/RajmaChawal.jpg", description: "Comfort", discount: "16% OFF", rating: 4.3 },

//   { id: 11, name: "Veg Noodles", price: 130, image: "/Images/VegNoodles.jpg", description: "Noodles", discount: "11% OFF", rating: 4.0 },

//   { id: 12, name: "Paneer Tikka", price: 250, image: "/Images/PaneerTikka.jpg", description: "Grilled", discount: "22% OFF", rating: 4.9 },

//   { id: 13, name: "Mushroom Curry", price: 190, image: "/Images/MushroomCurry.jpg", description: "Rich", discount: "17% OFF", rating: 4.4 },

//   { id: 14, name: "Dal Tadka", price: 120, image: "/Images/DalTadka.jpg", description: "Classic", discount: "9% OFF", rating: 4.1 },

//   { id: 15, name: "Veg Pulao", price: 150, image: "/Images/VegPulao.jpg", description: "Light", discount: "13% OFF", rating: 4.2 },

//   { id: 16, name: "Stuffed Paratha", price: 100, image: "/Images/StuffedParatha.jpg", description: "Stuffed", discount: "7% OFF", rating: 4.0 },

//   { id: 17, name: "Gobi Manchurian", price: 170, image: "/Images/GobiManchurian.jpg", description: "Crispy", discount: "19% OFF", rating: 4.6 },

//   { id: 18, name: "Samosa", price: 230, image: "/Images/samosa.jpg", description: "Snack", discount: "21% OFF", rating: 4.3 },

//   { id: 19, name: "Veg Spring Rolls", price: 140, image: "/Images/VegSpringRolls.jpg", description: "Crunchy", discount: "12% OFF", rating: 4.2 },

//   { id: 20, name: "Tomato Soup", price: 90, image: "/Images/TomatoSoup.jpg", description: "Warm", discount: "6% OFF", rating: 4.1 },

//   { id: 21, name: "Kadai Paneer", price: 210, image: "/Images/KadaiPaneer.jpg", description: "Spicy", discount: "15% OFF", rating: 4.7 },

//   { id: 22, name: "Malai Kofta", price: 230, image: "/Images/MalaiKofta.jpg", description: "Creamy", discount: "20% OFF", rating: 4.8 },

//   { id: 23, name: "Paneer Bhurji", price: 190, image: "/Images/PaneerBhurji.jpg", description: "Scrambled", discount: "11% OFF", rating: 4.3 },

//   { id: 24, name: "Jeera Rice", price: 120, image: "/Images/JeeraRice.jpg", description: "Aromatic", discount: "9% OFF", rating: 4.1 },

//   { id: 25, name: "Veg Hakka Noodles", price: 150, image: "/Images/VegHakkaNoodles.jpg", description: "Chinese", discount: "14% OFF", rating: 4.4 },

//   { id: 26, name: "Capsicum Masala", price: 170, image: "/Images/CapsicumMasala.jpg", description: "Flavorful", discount: "18% OFF", rating: 4.2 },

//   { id: 27, name: "Corn Cheese Balls", price: 160, image: "/Images/CornCheeseBalls.jpg", description: "Cheesy", discount: "16% OFF", rating: 4.5 },

//   { id: 28, name: "Veg Cutlet", price: 100, image: "/Images/VegCutlet.jpg", description: "Crispy", discount: "8% OFF", rating: 4.0 },

//   { id: 29, name: "Paneer Roll", price: 140, image: "/Images/PaneerRoll.jpg", description: "Wrap", discount: "12% OFF", rating: 4.3 },

//   { id: 30, name: "Methi Paratha", price: 110, image: "/Images/MethiParatha.jpg", description: "Herbal", discount: "10% OFF", rating: 4.1 },

//   { id: 31, name: "Veg Momos", price: 120, image: "/Images/VegMomos.jpg", description: "Steamed", discount: "13% OFF", rating: 4.6 },

//   { id: 32, name: "Paneer Pakora", price: 150, image: "/Images/PaneerPakora.jpg", description: "Fried", discount: "17% OFF", rating: 4.4 }
// ];


 

//   let totalItems = vegItems.length;
//   let itemsPerPage = 8;
//   let totalPages = Math.ceil(totalItems / itemsPerPage);

//   let [currentPage, setCurrentPage] = useState(1);

//   let EndIndex = currentPage * itemsPerPage;
//   let startIndex = EndIndex - itemsPerPage;

//   let subarr = vegItems.slice(startIndex, EndIndex);

//   let dispatch = useDispatch();

//   let vegItemsList = subarr.map((veg) => (
//    <li key={veg.id}>

//       <span className="discount">
//         {veg.discount}
//       </span>

//       <span className="veg-tag">
//         PURE VEG
//       </span>

//       <img
//         src={veg.image}
//         alt={veg.name}
//       />

//       <h3>{veg.name}</h3>

//       <p className="price">
//         ₹{veg.price}
//       </p>

//       <p className="rating">
//         ⭐⭐⭐⭐⭐
//         <span>({veg.rating})</span>
//       </p>

//       <button onClick={() => {dispatch(addtoCart(veg));
//                               toast.success(`${veg.name} Added to cart Successfully`)}
//       }>
//         Add to Cart
//       </button>

//     </li>

//   ));

//   return (


//     <div className="veg-container">

//      <ToastContainer position="top-right" autoclose={1000}/>

//       <h2 className="title">
//         Fresh Veg Delights
//       </h2>

//       <ol>
//         {vegItemsList}
//       </ol>

//       <div className="pagination">

//         <button
//           onClick={() => setCurrentPage(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Prev
//         </button>

//         {
//           Array.from(
//             { length: totalPages },
//             (_, index) => (

//               <button
//                 key={index + 1}
//                 onClick={() => setCurrentPage(index + 1)}
//               >
//                 {index + 1}
//               </button>

//             )
//           )
//         }

//         <button
//           onClick={() => setCurrentPage(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>

//       </div>

//         <Footer/>
//     </div>
//   );
// }

// export default Veg;














import React, { useState } from "react";
import "./Veg.css";
import { addtoCart } from "./cartSlice";
import { useDispatch } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import Footer from "./Footer";

function Veg() {

  const [search, setSearch] = useState("");

  const vegItems = [

    { id: 1, name: "Veg Fried Rice", price: 140, image: "/Images/VegFriedRice.jpg", description: "Savory", discount: "10% OFF", rating: 4.3 },

    { id: 2, name: "Palak Paneer", price: 200, image: "/Images/PalakPaneer.jpg", description: "Healthy", discount: "20% OFF", rating: 4.6 },

    { id: 3, name: "Aloo Gobi", price: 130, image: "/Images/AlooGobi.jpg", description: "Dry", discount: "15% OFF", rating: 4.1 },

    { id: 4, name: "Veg Manchurian", price: 160, image: "/Images/VegManchurian.jpg", description: "Saucy", discount: "25% OFF", rating: 4.5 },

    { id: 5, name: "Paneer Butter Masala", price: 220, image: "/Images/PaneerButterMasala.jpg", description: "Creamy", discount: "18% OFF", rating: 4.8 },

    { id: 6, name: "Veg Biryani", price: 180, image: "/Images/veg-biryani.jpg", description: "Spicy", discount: "12% OFF", rating: 4.7 },

    { id: 7, name: "Masala Dosa", price: 120, image: "/Images/MasalaDosa.jpg", description: "Crispy", discount: "8% OFF", rating: 4.4 },

    { id: 8, name: "Chole Bhature", price: 150, image: "/Images/CholeBhature.jpg", description: "Tangy", discount: "10% OFF", rating: 4.5 },

    { id: 9, name: "Pav Bhaji", price: 110, image: "/Images/PavBhaji.jpg", description: "Buttery", discount: "14% OFF", rating: 4.2 },

    { id: 10, name: "Rajma Chawal", price: 140, image: "/Images/RajmaChawal.jpg", description: "Comfort", discount: "16% OFF", rating: 4.3 },

    { id: 11, name: "Veg Noodles", price: 130, image: "/Images/VegNoodles.jpg", description: "Noodles", discount: "11% OFF", rating: 4.0 },

    { id: 12, name: "Paneer Tikka", price: 250, image: "/Images/PaneerTikka.jpg", description: "Grilled", discount: "22% OFF", rating: 4.9 },

    { id: 13, name: "Mushroom Curry", price: 190, image: "/Images/MushroomCurry.jpg", description: "Rich", discount: "17% OFF", rating: 4.4 },

    { id: 14, name: "Dal Tadka", price: 120, image: "/Images/DalTadka.jpg", description: "Classic", discount: "9% OFF", rating: 4.1 },

    { id: 15, name: "Veg Pulao", price: 150, image: "/Images/VegPulao.jpg", description: "Light", discount: "13% OFF", rating: 4.2 },

    { id: 16, name: "Stuffed Paratha", price: 100, image: "/Images/StuffedParatha.jpg", description: "Stuffed", discount: "7% OFF", rating: 4.0 },

    { id: 17, name: "Gobi Manchurian", price: 170, image: "/Images/GobiManchurian.jpg", description: "Crispy", discount: "19% OFF", rating: 4.6 },

    { id: 18, name: "Samosa", price: 230, image: "/Images/samosa.jpg", description: "Snack", discount: "21% OFF", rating: 4.3 },

    { id: 19, name: "Veg Spring Rolls", price: 140, image: "/Images/VegSpringRolls.jpg", description: "Crunchy", discount: "12% OFF", rating: 4.2 },

    { id: 20, name: "Tomato Soup", price: 90, image: "/Images/TomatoSoup.jpg", description: "Warm", discount: "6% OFF", rating: 4.1 },

    { id: 21, name: "Kadai Paneer", price: 210, image: "/Images/KadaiPaneer.jpg", description: "Spicy", discount: "15% OFF", rating: 4.7 },

    { id: 22, name: "Malai Kofta", price: 230, image: "/Images/MalaiKofta.jpg", description: "Creamy", discount: "20% OFF", rating: 4.8 },

    { id: 23, name: "Paneer Bhurji", price: 190, image: "/Images/PaneerBhurji.jpg", description: "Scrambled", discount: "11% OFF", rating: 4.3 },

    { id: 24, name: "Jeera Rice", price: 120, image: "/Images/JeeraRice.jpg", description: "Aromatic", discount: "9% OFF", rating: 4.1 },

    { id: 25, name: "Veg Hakka Noodles", price: 150, image: "/Images/VegHakkaNoodles.jpg", description: "Chinese", discount: "14% OFF", rating: 4.4 },

    { id: 26, name: "Capsicum Masala", price: 170, image: "/Images/CapsicumMasala.jpg", description: "Flavorful", discount: "18% OFF", rating: 4.2 },

    { id: 27, name: "Corn Cheese Balls", price: 160, image: "/Images/CornCheeseBalls.jpg", description: "Cheesy", discount: "16% OFF", rating: 4.5 },

    { id: 28, name: "Veg Cutlet", price: 100, image: "/Images/VegCutlet.jpg", description: "Crispy", discount: "8% OFF", rating: 4.0 },

    { id: 29, name: "Paneer Roll", price: 140, image: "/Images/PaneerRoll.jpg", description: "Wrap", discount: "12% OFF", rating: 4.3 },

    { id: 30, name: "Methi Paratha", price: 110, image: "/Images/MethiParatha.jpg", description: "Herbal", discount: "10% OFF", rating: 4.1 },

    { id: 31, name: "Veg Momos", price: 120, image: "/Images/VegMomos.jpg", description: "Steamed", discount: "13% OFF", rating: 4.6 },

    { id: 32, name: "Paneer Pakora", price: 150, image: "/Images/PaneerPakora.jpg", description: "Fried", discount: "17% OFF", rating: 4.4 }

  ];

  let filteredItems = vegItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  let totalItems = filteredItems.length;

  let itemsPerPage = 8;

  let totalPages = Math.ceil(totalItems / itemsPerPage);

  let [currentPage, setCurrentPage] = useState(1);

  let EndIndex = currentPage * itemsPerPage;

  let startIndex = EndIndex - itemsPerPage;

  let subarr = filteredItems.slice(startIndex, EndIndex);

  let dispatch = useDispatch();

  let vegItemsList = subarr.map((veg) => (

    <li key={veg.id}>

      <span className="discount">
        {veg.discount}
      </span>

      <span className="veg-tag">
        PURE VEG
      </span>

     
<div className="image-wrapper">

  <img
    src={veg.image}
    alt={veg.name}
  />

</div>

<div className="card-content">

  <div className="top-content">

    <h3>{veg.name}</h3>
    <p className="food-type">
  Premium Veg Dish
</p>

    <p className="price">
      ₹{veg.price}
    </p>

  </div>

  <div className="bottom-content">

    <p className="rating">
      ⭐⭐⭐⭐⭐
      <span> ({veg.rating})</span>
    </p>

    <p className="delivery">
      ⚡ 20-30 Min Delivery
    </p>

    <button
      onClick={() => {
        dispatch(addtoCart(veg));

        toast.success(
          `${veg.name} Added to cart Successfully`
        );
      }}
    >
      Add To Cart
    </button>

  </div>

</div>
      {/* <img
        src={veg.image}
        alt={veg.name}
      />

      <h3>{veg.name}</h3>

      <p className="price">
        ₹{veg.price}
      </p>

      <p className="rating">
        ⭐⭐⭐⭐⭐
        <span> ({veg.rating})</span>
      </p>

      <p className="delivery">
        🚀 20-30 mins
      </p>

      <button
        onClick={() => {
          dispatch(addtoCart(veg));

          toast.success(
            `${veg.name} Added to cart Successfully`
          );
        }}
      >
        Add to Cart
      </button> */}

    </li>

  ));

  return (

    <div className="veg-container">

      <ToastContainer
        position="top-right"
        autoClose={1000}
      />

      <h2 className="title">
        Fresh Veg Delights
      </h2>

      <div className="search-box">

        <input
          type="text"
          placeholder="Search your favorite food..."
          value={search}
          onChange={(e) => {setSearch(e.target.value); setCurrentPage(1); }} />

      </div>

      <ol>
        {vegItemsList}
      </ol>

      <div className="pagination">

        <button
          onClick={() =>
            setCurrentPage(currentPage - 1)
          }

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
                onClick={() =>
                  setCurrentPage(index + 1)
                }
              >
                {index + 1}
              </button>

            )
          )

        }

        <button
          onClick={() =>
            setCurrentPage(currentPage + 1)
          }

          disabled={currentPage === totalPages}
        >
          Next
        </button>

      </div>

      <Footer />

    </div>
  );
}

export default Veg;