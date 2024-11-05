import { createSlice } from '@reduxjs/toolkit'

export const customerSlice = createSlice({
    name: "customer",
    initialState: {
        id: "",
        loggedIn: false,
        cart: [/* {sku: "30", qty: 4, name: "Permanent Test Product", price: 345, image: "Proizvod"} */]
    },
    reducers: {
        logInCustomer: (state) => {
            state.loggedIn = true;
        },
        logOutCustomer: (state) => {
            state.loggedIn = false;
        },
        addToCart: (state, action) => {
            function filterItems(item) {
                return item.sku === action.payload.sku;
            }
            var filtered = state.cart.filter(filterItems);
            if (filtered.length > 0) {
                let index = state.cart.indexOf(filtered[0]);
                state.cart[index].qty = action.payload.qty;
            } else {
                state.cart.push(action.payload);
            }
        },
        removeFromCartByIndex: (state, action) => {
            state.cart.splice(action.payload, 1);
        },
        removeFromCart: (state, action) => {
            function filterItems(item) {
                return item.sku === action.payload;
            }
            var filtered = state.cart.filter(filterItems);
            let index = state.cart.indexOf(filtered[0]);
            state.cart.splice(index, 1);
        },
        updateCart: (state, action) => {
            function filterItems(item) {
                return item.sku === action.payload.sku;
            }
            var filtered = state.cart.filter(filterItems);
            let index = state.cart.indexOf(filtered[0]);
            state.cart[index][action.payload.type] = action.payload.value;
        }
    }
});

export const { 
    logInCustomer, 
    logOutCustomer, 
    addToCart, 
    removeFromCartByIndex, 
    removeFromCart ,
    updateCart
} = customerSlice.actions;

export const selectIsLoggedIn = state => state.customer.loggedIn;

export default customerSlice.reducer;