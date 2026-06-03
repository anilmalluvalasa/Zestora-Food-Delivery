import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import couponReducer from "./CouponSlice";
import ordersReducer from "./OrdersSlice";

const store  = configureStore({
    reducer:{
         cart:cartReducer,
         couponDetails : couponReducer,
         orders:ordersReducer

    }
    
});

export default store;
