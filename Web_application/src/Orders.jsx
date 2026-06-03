import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import "./Order.css";
import { useNavigate } from 'react-router-dom';
import { addtoCart } from "./cartSlice";

function Orders() {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  let orders = useSelector(
    globalstate => globalstate.orders
  );

  return (

    <div className="orders-page">

      <h1 className="orders-title">

        Your Order History 📦

      </h1>

      <div className="orders-container">

        {

          orders.length === 0 ?

          (

           <div className="empty-orders">

              <h2>No Orders Found 😔</h2>

              <p>
                Start ordering delicious food now!
              </p>

              <button
                className="shop-btn"
                onClick={() => navigate("/veg")} >

                Start Shopping

              </button>

            </div>

          )

          :

          (

            orders.map((order)=>(

              <div
                className="order-card"
                key={order.orderId}
              >

                {/* ===== HEADER ===== */}

                <div className="order-header">

                  <div>

                    <h2>
                      Order #{order.orderId}
                    </h2>

                    <p>
                      {order.date}
                    </p>

                  </div>

                  <span className="status">

                    Delivered

                  </span>
                  <div className="order-progress">

                <span>🍳 Preparing</span>

                <span>🚚 On The Way</span>

                <span>✅ Delivered</span>

              </div>

                </div>

                {/* ===== ITEMS ===== */}

                <div className="order-items">

                  {

                    order.items.map((item,index)=>(

                      <div
                        className="item-row"
                        key={index}
                      >

                        {/* ===== LEFT ===== */}

                        <div className="item-left">

                          <img
                            src={item.image}
                            alt={item.name}
                          />

                          <div>

                            <h3>{item.name}</h3>

                            <p>
                              Qty: {item.quantity}
                            </p>

                          </div>

                        </div>

                        {/* ===== PRICE ===== */}

                        <span className="item-price">

                          ₹{item.price}

                        </span>

                      </div>
                    ))
                  }

                </div>

                {/* ===== FOOTER ===== */}

                <div className="order-footer">

                  <h2>

                    Total:

                    <span>

                      ₹{order.price}

                    </span>

                  </h2>
                  <p className="total-items">

                    {order.items.length} Items

                  </p>


            <button className="reorder-btn"
                  onClick={() => {
                        order.items.forEach((item) => {

                          dispatch(addtoCart(item));

                        });

                        navigate("/cart");

                      }}
                    >

                      🔄 Reorder

                    </button>

                </div>

              </div>
            ))
          )
        }

      </div>

    </div>
  );
}

export default Orders;