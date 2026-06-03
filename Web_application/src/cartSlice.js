import { createSlice } from "@reduxjs/toolkit";

let saveCart = (cartData)=>{

  localStorage.setItem(
    "cart",
    JSON.stringify(cartData)
  );
};

let cartSlice = createSlice({

  name:"cart",

  initialState:
  JSON.parse(
    localStorage.getItem("cart")
  ) || [],

  reducers:{

    addtoCart:(state,action)=>{

      let existingItem =
      state.find((item)=>
        item.name === action.payload.name
      );

      if(existingItem){

        existingItem.quantity += 1;
      }

      else{

        state.push({
          ...action.payload,
          quantity:1
        });
      }

      saveCart(state);
    },

    incCart:(state,action)=>{

      let existingItem =
      state.find((item)=>
        item.name === action.payload.name
      );

      if(existingItem){

        existingItem.quantity += 1;
      }

      saveCart(state);
    },

    decrementQty:(state,action)=>{

      let existingItem =
      state.find((item)=>
        item.name === action.payload.name
      );

      if(existingItem){

        if(existingItem.quantity > 1){

          existingItem.quantity -= 1;
        }

        else{

          let index =
          state.findIndex((item)=>
            item.name === action.payload.name
          );

          state.splice(index,1);
        }
      }

      saveCart(state);
    },

    removeCart:(state,action)=>{

      let existingItemIndex =
      state.findIndex((item)=>
        item.name === action.payload.name
      );

      state.splice(existingItemIndex,1);

      saveCart(state);
    },

    clearCart:()=>{

      localStorage.removeItem("cart");

      return [];
    }
  }
});

export const { addtoCart,incCart,decrementQty,removeCart,clearCart} = cartSlice.actions;

export default cartSlice.reducer;