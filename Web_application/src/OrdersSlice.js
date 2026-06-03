import { createSlice } from '@reduxjs/toolkit';

let saveOrders = (ordersData)=>{

  localStorage.setItem(
    "orders",
    JSON.stringify(ordersData)
  );
};

let ordersSlice = createSlice({

  name:"orders",

  initialState:
  JSON.parse(
    localStorage.getItem("orders")
  ) || [],

  reducers:{

    addorders:(state,action)=>{

      state.push(action.payload);

      saveOrders(state);
    },

    clearOrders:()=>{

      localStorage.removeItem("orders");

      return [];
    }
  }
});

export let {

  addorders,
  clearOrders

} = ordersSlice.actions;

export default ordersSlice.reducer;