import { createSlice } from "@reduxjs/toolkit";

let initialState = [];

if (localStorage.getItem("cartproducts") != null) {
    initialState = JSON.parse(localStorage.getItem("cartproducts"));
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productId = action.payload;
            const product = state.find(item => item.id === productId.id);
            if (product) {
                product.quantity += 1;
            } else {
                state.push(action.payload)
            }

        },
        removeProduct: (state, action) => {
            return state.filter((item) => item.id !== action.payload)

        },
        incrementQuantity: (state, action) => {
            const productId = action.payload;
            const product = state.find(item => item.id === productId);
            if (product) {
                product.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const productId = action.payload;
            const product = state.find(item => item.id === productId);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        }
    },
});
export const { addToCart, removeProduct, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;