
    import { createSlice } from '@reduxjs/toolkit';
    import { coupons } from './Coupons';
    const CouponSlice = createSlice({

        name:"coupon",
        initialState:{
            code:"",
            discount:0,
            applied:false,
            message:"",
        },
        reducers:{
            applycoupon:(state,action)=>{
                const enterdCoupon = action.payload.toUpperCase();
                if(enterdCoupon in coupons){
                    state.code = enterdCoupon;
                    state.discount = coupons[enterdCoupon];
                    state.applied = true;
                    state.message = `Coupon "${enterdCoupon}" applied! You got "${coupons[enterdCoupon]}" % off`;

                }
                else{
                    state.message = "Invalid Coupon Code";
                }
            },

            resetCoupon :(state)=>{
                    state.code  = "",
                    state.discount = 0,
                    state.applied = false,
                    state.message = ""

            } 

        }
    });
    export const{applycoupon,resetCoupon}  = CouponSlice.actions;

    export default CouponSlice.reducer;