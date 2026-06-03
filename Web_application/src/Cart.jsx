import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import {
  addtoCart,
  clearCart,
  decrementQty,
  removeCart
} from './cartSlice';

import {
  resetCoupon,
  applycoupon
} from './CouponSlice';

import "./Cart.css";

import Swal from 'sweetalert2';

import confetti from "canvas-confetti";

import { QRCode } from 'react-qr-code';

import emailjs from "@emailjs/browser";

import { addorders } from "./OrdersSlice";

function Cart() {

  let cartItems1 =
    useSelector(
      (globalstate)=>globalstate.cart
    );

  let dispatch = useDispatch();
  const navigate = useNavigate();

  let [disc,setDiscount] = useState(0);

  let [coupon,setCoupon] = useState("");

  let [paymentmode,setPaymentmode] =
    useState('');

  let [customeremail,setEmail] =
    useState('');

  let [paymentsuccess,setPaymentSuccess] =
    useState(false);

  let {
    code,
    discount,
    applied,
    message

  } = useSelector(
    (globalstate)=>(
      globalstate.couponDetails
    )
  );

  /* =========================================
     BILL CALCULATIONS
  ========================================= */

  let totalAmount =
    cartItems1.reduce(
      (total,item)=>
        total + item.price * item.quantity,
      0
    );

  let discount_amt =
    (totalAmount * disc) / 100;

  let finalAmt =
    totalAmount - discount_amt;

  let couponDiscountAmt =
    (finalAmt * discount) / 100;

  let finalAmountAfterCoupon =
    finalAmt - couponDiscountAmt;

  let taxAmount =
    (finalAmountAfterCoupon * 18) / 100;

  // let netAmount =
  //   finalAmountAfterCoupon + taxAmount;

  let deliveryFee = totalAmount >= 500 ? 0 : 50;

 let netAmount = finalAmountAfterCoupon + taxAmount + deliveryFee;

  /* =========================================
     REMOVE ITEM
  ========================================= */

  let notification = (item)=>{

    Swal.fire({

      icon:"warning",

      title:"Are You Sure?",

      text:"Do you want to remove this item?",

      showConfirmButton:true,

      confirmButtonText:"Yes, Remove It!",

      confirmButtonColor:"#22c55e",

      showCancelButton:true,

      cancelButtonText:"Cancel",

      cancelButtonColor:"#ef4444",

      background:"#111827",

      color:"#ffffff",

      borderRadius:"20px"

    }).then((result)=>{

      if(result.isConfirmed){

        dispatch(removeCart(item));

        if(cartItems1.length===1){

          dispatch(resetCoupon());
        }

        Swal.fire({

          toast:true,

          position:"top-end",

          icon:"success",

          title:"Item Removed Successfully",

          showConfirmButton:false,

          timer:2500,

          timerProgressBar:true,

          background:"#111827",

          color:"#ffffff"
        });
      }
    });
  };

  /* =========================================
     CONFETTI
  ========================================= */

  let confetmsg = ()=>{

    confetti({

      particleCount:120,

      spread:70,

      origin:{ y:0.7 }
    });

    confetti({

      particleCount:90,

      angle:60,

      spread:55,

      origin:{ x:0 }
    });

    confetti({

      particleCount:90,

      angle:120,

      spread:55,

      origin:{ x:1 }
    });
  };

  /* =========================================
     EMAIL TEMPLATE
  ========================================= */

  let templateItems = {

    order_id:"ORD101",

    logo:"/Images.logo.jpg",

    orders: cartItems1.map((item)=>({

      name:item.name,

      price:
      (item.price * item.quantity)
      .toFixed(2),

      units:item.quantity,

      item:item.image
    })),

    cost:{

      shipping:50,

      tax:taxAmount,

      coupon:couponDiscountAmt,

      total:netAmount
    },

    email:customeremail
  };

  /* =========================================
     PAYMENT
  ========================================= */

  let handlePayment = ()=>{

    Swal.fire({

      icon:"success",

      title:"Payment Successful 🎉",

      text:
      `₹${netAmount.toFixed(2)} Paid Successfully`,

      confirmButtonColor:"#22c55e",

      background:"#111827",

      color:"#ffffff"

    }).then(()=>{

      setPaymentSuccess(true);

      confetmsg();
    });
  };

  let emaillogic = ()=>{

      let loggedInUser =
    JSON.parse(
      localStorage.getItem(
        "loggedInUser"
      )
    );

  if(!loggedInUser){

    Swal.fire({

      icon:"warning",

      title:"Login Required 🔒",

      text:
      "Please login or register to place your order.",

      confirmButtonText:
      "Go To Login",

      showCancelButton:true,

      confirmButtonColor:"#f59e0b",

      background:"#111827",

      color:"#ffffff"

    }).then((result)=>{

      if(result.isConfirmed){

        navigate("/login");

      }

    });

    return;
  }



    if(!paymentsuccess){

      Swal.fire({

        icon:"warning",

        title:"Payment Required",

        text:"Please complete payment first",

        confirmButtonColor:"#ef4444",

        background:"#111827",

        color:"#ffffff"
      });

      return;
    }

    emailjs.send(

      "service_cmj0s2e",

      "template_wmqrln8",

      templateItems,

      "RVUtNJRmg8kRJL90H"

    )

    .then(()=>{

      Swal.fire({

        icon:"success",

        title:"Order Confirmed 🎉",

        text:"Email sent successfully",

        confirmButtonColor:"#22c55e",

        background:"#111827",

        color:"#ffffff"
      });

      let purchaseDetails = {

        orderId:
        "ORD-"+Math.floor(Math.random()*1000000),

        date:
        new Date().toLocaleString(),

        items:[...cartItems1],

        price:netAmount
      };

      dispatch(addorders(purchaseDetails));

      dispatch(clearCart());

      dispatch(resetCoupon());

      setPaymentSuccess(false);
    })

    .catch(()=>{

      Swal.fire({

        icon:"error",

        title:"Email Failed",

        text:"Email sending failed",

        background:"#111827",

        color:"#ffffff"
      });
    });
  };



  return (

    <>

      {
        cartItems1.length===0 ? (

          <h2 className="empty">

            Your Cart is Empty

          </h2>

        ) : (

          <div className='cart'>

            <div className="cart-header">

              <h1>Your Cart</h1>
              <p className="cart-count">
                {cartItems1.length} Items Added
              </p>

              <button
                className="clear-btn"
                onClick={()=>{
                  dispatch(clearCart());
                  dispatch(resetCoupon());
                }}
              >

                Clear Cart

              </button>

            </div>

            <div className="cart-layout">

              {/* LEFT */}

              <div className="cart-left-section">

                <ul className="cart-list">

                  {
                    cartItems1.map((item)=>(

                      <li
                        key={item.id}
                        className="cart-item"
                      >

                        <div className="cart-left">

                          <img
                            src={item.image}
                            alt="No image"
                            className="cart-img"
                          />

                          <div className="cart-info">

                            <h3>{item.name}</h3>

                            <p className="price">

                              ₹{item.price}

                            </p>
                            <p className="delivery-time">
                              🚚 Delivery in 20-30 mins
                            </p>

                            <div className="qty-box">

                              <button
                                className="qty-btn"
                                onClick={()=>
                                  dispatch(
                                    decrementQty(item)
                                  )
                                }
                              >
                                -
                              </button>

                              <span className="qty">

                                {item.quantity}

                              </span>

                              <button
                                className="qty-btn"
                                onClick={()=>
                                  dispatch(
                                    addtoCart(item)
                                  )
                                }
                              >
                                +
                              </button>

                            </div>

                          </div>

                        </div>

                        <button
                          className="remove-btn"
                          onClick={()=>
                            notification(item)
                          }
                        >
                          Remove
                        </button>

                      </li>
                    ))
                  }

                </ul>

              </div>

              {/* RIGHT */}

              <div className="cart-right-section">

                <div className="bill-container">

                  <h2 className="bill-title">

                    Payment Summary

                  </h2>

                  <div className="bill-row">

                    <span>Total Amount</span>

                    <span>₹{totalAmount}</span>

                  </div>

                  <div className="bill-row discount-row">

                    <span>Discount</span>

                    <span>- ₹{discount_amt}</span>

                  </div>

                  <div className="bill-row">

                    <span>Delivery Fee</span>

                    <span>

                      {
                        totalAmount >= 500
                        ? "FREE"
                        : "₹50"
                      }

                    </span>



                    {
                      totalAmount >= 500 && (

                        <div className="free-delivery">

                          🎉 Free Delivery Applied

                        </div>

                      )
                    }

                  </div>

                  <div className="bill-row">

                    <span>GST</span>

                    <span>
                      ₹{taxAmount.toFixed(2)}
                    </span>

                  </div>
                  <div className="bill-row discount-row">

                      <span>Coupon Discount</span>

                      <span>
                      - ₹{couponDiscountAmt.toFixed(2)}
                      </span>

                    </div>

              

                  <div className="savings-box">

                    🎉 You Saved ₹
                    {(discount_amt + couponDiscountAmt).toFixed(2)}

                  </div> 

                  <div className="bill-divider"></div>

                  <div className="bill-row final-row">

                    <span>Net Payable</span>

                    <span>
                      ₹{netAmount.toFixed(2)}
                    </span>

                  </div>

                </div>

             <div className="coupon-box">

              <h3>🎁 Apply Coupon</h3>

              <div className="input-bar">

                <input
                  type="text"
                  placeholder="Enter Coupon Code"
                  value={coupon}
                  onChange={(e)=>
                    setCoupon(e.target.value.toUpperCase())
                  }
                />

                <button
                  className="btn"
                  onClick={() => {

                    dispatch(
                      applycoupon(coupon)
                    );

                  }}
                > Apply</button>

              </div>

              {
                message && (
                  <p className="coupon-message">
                    {message}
                  </p>
                )
              }

            </div>

                



         <div className="payment-method">

              <h1>Select Payment</h1>

              <button
                onClick={()=>{
                  setPaymentmode('qr');
                }}
              >
                📱 Pay With QR
              </button>

              <button
                onClick={()=>{
                  setPaymentmode('cod');
                }}
              >
                💵 Cash On Delivery
              </button>

              <button
                onClick={()=>{

                  Swal.fire({

                    icon:"info",

                    title:"Coming Soon 🚀",

                    text:"Card payments will be available soon.",

                    background:"#111827",

                    color:"#fff"
                  });
                }}>
                💳 Pay With Card
              </button>

        </div>

              {
  paymentmode==='qr' && (

    <div className='qr-payment'>

      <h4>

        Scan To Pay
        ₹{netAmount.toFixed(2)}

      </h4>

      <QRCode
        value={`upi://pay?pa=8179387963@axl&pn=AnilStore&am=${netAmount.toFixed(2)}&cu=INR`}
      />

      <p>

        UPI ID:
        8179387963@axl

      </p>

      <button
        className="payment-done-btn"
        onClick={handlePayment}
      >

        Payment Done

      </button>

    </div>
  )
}

{
  paymentmode === 'cod' && (

    <div className="cod-box">

      <h3>

        💵 Cash On Delivery

      </h3>

      <p>

        Pay ₹{netAmount.toFixed(2)}
        when your order arrives.

      </p>

      <button
        className="payment-done-btn"
        onClick={handlePayment}
      >

        Confirm COD

      </button>

    </div>

  )
}



        {
  paymentmode === "cod" && (

    <>

      <div className="address-box">

        <label>

          Delivery Address

        </label>

        <textarea

          placeholder="Enter Full Address"

          rows="3"

        ></textarea>

      </div>

      <div className="notes-box">

        <label>

          Special Instructions

        </label>

        <textarea

          rows="2"

          placeholder="Extra spicy, No onions, etc."

        ></textarea>

      </div>

    </>

  )
}


                <div className="email-box">

                  <label>

                    Enter Email

                  </label>

                  <input
                    type="email"
                    value={customeremail}
                    placeholder="Enter Your Email"
                    onChange={(e)=>
                      setEmail(e.target.value)
                    }
                  />

                  <button onClick={emaillogic}>

                    Place Order

                  </button>

                </div>

              </div>

            </div>

          </div>
        )
      }

    </>
  );
}

export default Cart;