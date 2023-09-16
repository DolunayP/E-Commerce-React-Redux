import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './categorySlice'
import productSlice from './ProductSlice'
import cartSlice from './cartSlice'

export const store = configureStore({
    reducer: {
        categories: categorySlice,
        products: productSlice,
        carts: cartSlice,
    },
})